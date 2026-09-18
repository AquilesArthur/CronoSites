import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ══ Carousel ═════════════════════════════════════════════
   Cards on a turntable that drift at rest, give under the
   pointer, and can be swiped round.
*/

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

// Massively scaled up for desktop prominence
const CARD_W = 480;
const CARD_H = 660;

const STAGE_W = 1400;
const STAGE_H = 600;

const ORBIT = 300;
const DEPTH = 120;
const DEPTH_MAX = 170;
const CORNER = 36;
const FLOAT = 15;
const SINK = 50;
const SETTLE = 50;

const LEAN = 60;
const PULL = 80; // Easier dragging
const TOSS = 150;
const MOST = 2;
const BASE = 620;

const ANGLE = [-4.2, 2.6, -1.4, 3.8, 1.7];
const PERIOD = [4.7, 5.9, 6.7, 5.3, 7.1, 6.1];

type Spot = { x: number; y: number; s: number; z: number };

const spotOf = (i: number, turn: number, orbit: number, depth: number, N: number): Spot => {
  const th = (i - turn) * ((Math.PI * 2) / N);
  const f = (Math.cos(th) + 1) / 2;
  return {
    x: Math.sin(th) * orbit,
    y: -(1 - f) * LEAN,
    s: mix(1 - clamp(depth, 0, DEPTH_MAX) / 200, 1, f),
    z: Math.round(f * 100),
  };
};

const write = (el: HTMLElement, sp: Spot, angle: number) => {
  el.style.transform = `translate(-50%, -50%) translate(${sp.x.toFixed(2)}px, ${sp.y.toFixed(2)}px) rotate(${angle}deg) scale(${sp.s.toFixed(4)})`;
  el.style.zIndex = String(sp.z);
};

const out = (t: number) => 1 - (1 - t) ** 4;

const springOf = (tune: number) => ({
  k: 0.08 + (tune / 100) * 0.16,
  d: 0.62 + (tune / 100) * 0.2,
});

function useSpring(target: number, tune = 50, instant = false) {
  const [at, setAt] = useState(target);
  const cur = useRef(target);
  const vel = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    if (instant) {
      cur.current = target;
      vel.current = 0;
      setAt(target);
      return;
    }
    const { k, d } = springOf(tune);
    let prev = 0;
    const tick = (t: number) => {
      const dt = prev ? clamp((t - prev) / 16.67, 0, 2.5) : 1;
      prev = t;
      vel.current += (target - cur.current) * k * dt;
      vel.current *= Math.pow(d, dt);
      cur.current += vel.current * dt;
      if (Math.abs(target - cur.current) < 0.02 && Math.abs(vel.current) < 0.02) {
        cur.current = target;
        vel.current = 0;
        setAt(target);
        raf.current = 0;
        return;
      }
      setAt(cur.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [target, tune, instant]);

  return at;
}

const stillness = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const rate = (speed: number) => 1.6 - (speed / 100) * 1.2;

export function Carousel({
  orbit = ORBIT,
  depth = DEPTH,
  corner = CORNER,
  float = FLOAT,
  sink = SINK,
  settle = SETTLE,
  spin = 0,
  items = [],
  onActiveChange,
}: {
  orbit?: number;
  depth?: number;
  corner?: number;
  float?: number;
  sink?: number;
  settle?: number;
  spin?: number;
  items: { id: number; image: string }[];
  onActiveChange?: (index: number) => void;
}) {
  const still = stillness();
  const N = items.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0); // Initialize to 0 to prevent a 1000px flash on mount

  useLayoutEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 1280; // xl breakpoint
      let availableWidth = window.innerWidth;
      
      if (isMobile) {
        // On mobile, let the carousel bleed off the edges a bit so the center card is readable
        // We set the availableWidth wider than the screen to scale it up
        availableWidth = window.innerWidth * 1.6;
      } else {
        // On desktop, it takes 55% of the max-1400px container minus a healthy gap
        const containerWidth = Math.min(window.innerWidth, 1400);
        availableWidth = (containerWidth * 0.55) - 60; // Safe area
      }
      
      // Scale down if parent is smaller
      setScale(availableWidth / STAGE_W);
    };
    
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const slots = useRef<(HTMLDivElement | null)[]>([]);
  const turn = useRef(0);
  const raf = useRef(0);
  const drag = useRef<{
    x0: number; t0: number; last: number; t: number; vx: number; moved: boolean;
  } | null>(null);
  const [held, setHeld] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const reportActive = useCallback(() => {
    if (N === 0) return;
    let idx = Math.round(turn.current) % N;
    if (idx < 0) idx += N; // handle negative modulo
    
    if (activeIndex !== idx) {
      setActiveIndex(idx);
      onActiveChange?.(idx);
    }
  }, [N, activeIndex, onActiveChange]);

  const paint = useCallback(() => {
    slots.current.forEach((el, i) =>
      el && write(el, spotOf(i, turn.current, orbit, depth, N), ANGLE[i % ANGLE.length]));
      
    reportActive();
  }, [orbit, depth, N, reportActive]);

  useLayoutEffect(paint, [paint]);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  useEffect(() => {
    if (!spin || still || held) return;
    let id = 0;
    let prev = 0;
    const step = (t: number) => {
      if (prev) turn.current += ((t - prev) / 1000) * (N / spin);
      prev = t;
      paint();
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [spin, still, held, paint, N]);

  const glide = (to: number) => {
    cancelAnimationFrame(raf.current);
    const from = turn.current;
    if (still || from === to) {
      turn.current = to;
      paint();
      return;
    }
    const ms = BASE * rate(clamp(settle, 0, 100));
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / ms);
      turn.current = mix(from, to, out(p));
      paint();
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  const go = (d: number) => glide(Math.round(turn.current) + d);

  // Expose a way to jump to specific item by clicking
  const handleCardClick = (i: number) => {
    if (drag.current?.moved) return;
    
    const currentRound = Math.round(turn.current);
    const currentMod = ((currentRound % N) + N) % N;
    
    let diff = i - currentMod;
    
    // Find shortest path
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    
    if (diff !== 0) {
      go(diff);
    }
  };

  const down = (e: React.PointerEvent) => {
    cancelAnimationFrame(raf.current);
    drag.current = {
      x0: e.clientX, t0: turn.current, last: e.clientX,
      t: e.timeStamp, vx: 0, moved: false,
    };
    setHeld(true);
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { }
  };

  const move = (e: React.PointerEvent) => {
    const g = drag.current;
    if (!g) return;
    const dx = e.clientX - g.x0;
    if (!g.moved && Math.abs(dx) > 3) g.moved = true;

    const dt = Math.max(1, e.timeStamp - g.t);
    g.vx = (g.vx + (e.clientX - g.last) / dt) / 2;
    g.last = e.clientX;
    g.t = e.timeStamp;

    turn.current = g.t0 - dx / PULL;
    paint();
  };

  const up = () => {
    const g = drag.current;
    if (!g) return;
    drag.current = null;
    setHeld(false);
    const carry = clamp((-g.vx * TOSS) / PULL, -MOST, MOST);
    const to = Math.round(turn.current + carry);
    if (g.moved) glide(to);
  };

  const key = (e: React.KeyboardEvent) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    go(d);
  };

  const r = clamp(corner, 0, 40);

  return (
    <div className="relative w-full flex items-center justify-center group" ref={containerRef}>
      
      {/* Wrapper that is exactly STAGE_W wide (scaled), keeps arrows relative to the content block */}
      <div className="relative flex items-center justify-center mx-auto overflow-visible" style={{ width: STAGE_W * scale, height: STAGE_H * scale, maxWidth: '100%' }}>
        
        {/* Navigation Arrows for Desktop - Hovering over the side cards to save space and keep scale large */}
        <button 
          onClick={() => go(-1)} 
          className="absolute left-0 md:left-2 lg:left-6 top-1/2 -translate-y-1/2 z-40 p-4 md:p-5 rounded-full bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 text-black transition-all duration-300 hidden md:flex items-center justify-center pointer-events-auto group/left hover:scale-110 hover:shadow-[0_10px_40px_rgba(10,102,194,0.2)] hover:border-crono-accent/20 overflow-hidden"
          aria-label="Projeto anterior"
        >
          <span className="relative grid w-[24px] h-[24px] place-items-center">
            <ChevronLeft className="transition-all duration-300 ease-out group-hover/left:-translate-x-[2px] group-hover/left:text-crono-accent" size={24} />
          </span>
        </button>

        <button 
          onClick={() => go(1)} 
          className="absolute right-0 md:right-2 lg:right-6 top-1/2 -translate-y-1/2 z-40 p-4 md:p-5 rounded-full bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 text-black transition-all duration-300 hidden md:flex items-center justify-center pointer-events-auto group/right hover:scale-110 hover:shadow-[0_10px_40px_rgba(10,102,194,0.2)] hover:border-crono-accent/20 overflow-hidden"
          aria-label="Próximo projeto"
        >
          <span className="relative grid w-[24px] h-[24px] place-items-center">
            <ChevronRight className="transition-all duration-300 ease-out group-hover/right:translate-x-[2px] group-hover/right:text-crono-accent" size={24} />
          </span>
        </button>

        {/* Scaled 3D Stage - perfectly centered within its wrapper */}
        <div 
          className="car absolute top-1/2 left-1/2 pointer-events-auto" 
          style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <div
            className="car-track"
            data-held={held}
            role="group"
            aria-label="Card carousel"
            aria-roledescription="carousel"
            tabIndex={0}
            onKeyDown={key}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => { slots.current[i] = el; }}
                className="car-slot"
                style={{ width: CARD_W, height: CARD_H }}
                onClick={() => handleCardClick(i)}
              >
                <div
                  className="car-float"
                  style={{
                    animationName: float <= 0 ? "none" : undefined,
                    animationDuration: `${PERIOD[i % PERIOD.length]}s`,
                    ["--lift" as string]: `${((clamp(float, 0, 100) / 100) * 16).toFixed(2)}px`,
                    ["--sway" as string]: `${((clamp(float, 0, 100) / 100) * 1.4).toFixed(2)}deg`,
                  }}
                >
                  <Card
                    shot={item.image}
                    corner={r}
                    sink={sink}
                    off={held || still}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ shot, corner, sink, off }: { shot: string; corner: number; sink: number; off: boolean; }) {
  const skin = useRef<HTMLDivElement | null>(null);
  const [pt, setPt] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);
  const still = stillness();

  const live = on && !off;
  const sx = useSpring(live ? pt.x : 0, 50, still);
  const sy = useSpring(live ? pt.y : 0, 50, still);
  const lit = useSpring(live ? 1 : 0, 50, still);

  const deep = clamp(sink, 0, 100) / 100;
  const max = deep * 13;
  
  const rx = -sy * max;
  const ry = sx * max;

  const px = ((sx + 1) / 2) * 100;
  const py = ((sy + 1) / 2) * 100;
  const dark = deep * 0.5 * lit;
  const rim = deep * 0.16 * lit;

  const track = (e: React.PointerEvent) => {
    const el = skin.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    setPt({
      x: clamp(((e.clientX - b.left) / b.width) * 2 - 1, -1, 1),
      y: clamp(((e.clientY - b.top) / b.height) * 2 - 1, -1, 1),
    });
    setOn(true);
  };

  return (
    <div
      ref={skin}
      className="car-card cursor-pointer"
      onPointerMove={track}
      onPointerOut={(e) => {
        const el = skin.current;
        const to = e.relatedTarget as Node | null;
        if (!el || !to || !el.contains(to)) setOn(false);
      }}
      onPointerCancel={() => setOn(false)}
      style={{
        borderRadius: corner,
        backgroundImage: `url(${shot})`,
        transform: `translateZ(${(-10 * deep * lit).toFixed(2)}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`,
        boxShadow: "0 12px 28px -10px rgba(var(--shadow-rgb), 0.28)",
      }}
    >
      <span
        className="car-sheen"
        aria-hidden="true"
        style={{
          borderRadius: corner,
          backgroundImage: `radial-gradient(60% 60% at ${px.toFixed(1)}% ${py.toFixed(1)}%, rgba(255, 255, 255, ${(dark * 0.7).toFixed(3)}) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(54% 44% at ${(100 - px).toFixed(1)}% ${(100 - py).toFixed(1)}%, rgba(255, 255, 255, ${rim.toFixed(3)}) 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
    </div>
  );
}
