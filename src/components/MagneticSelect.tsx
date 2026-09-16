import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const CHIP = 88;
const H_PAD = 52;
const PITCH = 90;
const SPREAD = 2.8;

const CLUSTER: Record<number, [number, number][]> = {
  3: [[0, -52], [45, 26], [-45, 26]],
  7: [[0, 0], [90, 0], [45, -78], [-45, -78], [-90, 0], [-45, 78], [45, 78]],
};

const SIZES: Record<string, number> = { Small: 3, Large: 7 };

const stillness = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function MagneticSelect({
  items,
  size = "Large",
  pull = 55,
  bounce = 55,
  give = 50,
  onChange
}: {
  items: { title: string; icon?: React.ElementType }[];
  size?: "Small" | "Large";
  pull?: number;
  bounce?: number;
  give?: number;
  onChange?: (index: number) => void;
}) {
  const n = Math.min(SIZES[size] ?? 7, items.length);
  const p = clamp(pull, 0, 100) / 100;
  const pts = CLUSTER[n];

  const [sel, setSel] = useState<number | null>(0);
  const at = sel === null || sel >= n ? null : sel;

  const grow = 1.16 + 0.22 * p;
  const room = (CHIP * (grow - 1)) / 2;
  const aura = 3 + 9 * p;
  const tilt = 5 * p;
  const cower = 0.04 + 0.09 * p;

  const FADE = 88;
  const wrap = useRef<HTMLDivElement | null>(null);
  const hub = useRef({ x: 0, y: 0, r: 1 });
  const [lean, setLean] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const still = stillness();

  const xs = pts.map((q) => q[0]);
  const ys = pts.map((q) => q[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const W = Math.max(...xs) - minX + CHIP + H_PAD * 2;
  const H = Math.max(...ys) - minY + CHIP + H_PAD * 2;

  const zeta = 0.9 - 0.48 * (clamp(bounce, 0, 100) / 100);
  const swing = (k: number, mass: number) => ({
    type: "spring" as const,
    stiffness: k,
    damping: 2 * Math.sqrt(k * mass) * zeta,
    mass,
  });

  const field = pts.map(([px, py], i) => {
    if (at === null) {
      return { far: 0, fall: 0, push: 0, ux: 0, uy: 0,
        cx: px - minX + H_PAD + CHIP / 2,
        cy: py - minY + H_PAD + CHIP / 2 };
    }
    const [ax, ay] = pts[at];
    const dx = px - ax;
    const dy = py - ay;
    const gap = Math.hypot(dx, dy);
    const far = gap / PITCH;
    const fall = i === at ? 0 : Math.exp(-(far - 1) / SPREAD);
    const push = i === at ? 0 : room + aura;
    const ux = gap ? dx / gap : 0;
    const uy = gap ? dy / gap : 0;
    return { far, fall, push, ux, uy,
      cx: px - minX + H_PAD + CHIP / 2 + ux * push,
      cy: py - minY + H_PAD + CHIP / 2 + uy * push };
  });

  hub.current = {
    x: W / 2,
    y: H / 2,
    r: Math.max(1, ...field.map((f) =>
      Math.hypot(f.cx - W / 2, f.cy - H / 2) + CHIP / 2)),
  };

  useEffect(() => {
    const el = wrap.current;
    if (!el || !give || still) return;
    let raf = 0;
    let next = { x: 0, y: 0 };
    const publish = () => { raf = 0; setLean(next); };
    const read = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      const k = b.width / (el.offsetWidth || b.width) || 1;
      const mx = (e.clientX - b.left) / k;
      const my = (e.clientY - b.top) / k;
      const { x: hx, y: hy, r } = hub.current;
      const dx = mx - hx;
      const dy = my - hy;
      const d = Math.hypot(dx, dy);
      const rise = Math.min(1, d / r);
      const away = d <= r ? 1 : Math.max(0, 1 - (d - r) / FADE);
      const drawn = rise * away * (2 + (clamp(give, 0, 100) / 100) * 5);
      next = drawn > 0
        ? { x: (dx / (d || 1)) * drawn, y: (dy / (d || 1)) * drawn }
        : { x: 0, y: 0 };
      if (!raf) raf = requestAnimationFrame(publish);
    };
    const gone = () => { next = { x: 0, y: 0 }; if (!raf) raf = requestAnimationFrame(publish); };
    document.addEventListener("pointermove", read, { passive: true });
    document.addEventListener("pointerleave", gone);
    return () => {
      document.removeEventListener("pointermove", read);
      document.removeEventListener("pointerleave", gone);
      cancelAnimationFrame(raf);
    };
  }, [give, still, n]);

  const choose = (i: number) => {
    if (i === at) return;
    setSel(i);
    onChange?.(i);
  };

  return (
    <div className="mag" ref={wrap} style={{ width: W, height: H }} role="radiogroup" aria-label="Shape">
      {pts.map(([px, py], i) => {
        const on = i === at;
        const { far, fall, push, ux, uy } = field[i];

        const k = 300 + 280 * (1 - Math.min(far, 3) / 4);
        const wait = far * 0.022;
        const isCenter = i === 0;

        return (
          <motion.button
            key={i}
            className="mag-chip"
            role="radio"
            aria-checked={on}
            aria-label={items[i].title}
            data-on={on || undefined}
            style={{
              left: px - minX + H_PAD,
              top: py - minY + H_PAD,
              width: CHIP,
              height: CHIP,
            }}
            onClick={() => choose(i)}
            initial={false}
            animate={{
              x: ux * push,
              y: uy * push,
              scaleX: on ? grow : 1 - cower * fall,
              scaleY: on ? grow : 1 - cower * fall,
              rotate: ux * tilt * fall,
            }}
            transition={{
              x: { ...swing(k, 0.9), delay: wait },
              y: { ...swing(k, 0.9), delay: wait },
              scaleX: { ...swing(k * 1.24, 0.8), delay: wait },
              scaleY: { ...swing(k * 0.86, 0.95), delay: wait },
              rotate: { ...swing(k * 0.8, 1), delay: wait },
            }}
          >
            <span
              className="mag-skin"
              style={{
                "--lx": `${lean.x.toFixed(2)}px`,
                "--ly": `${lean.y.toFixed(2)}px`,
              } as React.CSSProperties}
            >
              <div className="mag-mark relative w-full h-full flex items-center justify-center">
                {items[i].icon && (
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${on ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                    {React.createElement(items[i].icon as React.ElementType, {
                      className: "w-7 h-7 text-white",
                      strokeWidth: 2
                    })}
                  </div>
                )}
              </div>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
