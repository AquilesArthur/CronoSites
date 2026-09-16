import "./cursor-edge-glow-button.css";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FREQUENCY = 3.4;
const DAMPING = 0.78;
const GLOW_RISE = 0.5;
const EDGE_SATURATION = 0.55;
const EDGE_BRIGHTNESS = 0.12;
const HUE_SHIFT = 0;

export function CarouselArrow({ direction, onClick, className }: { direction: "left" | "right", onClick: () => void, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lightTrackRef = useRef<HTMLSpanElement>(null);
  const rightGlowRef = useRef<HTMLSpanElement>(null);
  const leftGlowRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    const lightTrack = lightTrackRef.current;
    const rightGlow = rightGlowRef.current;
    const leftGlow = leftGlowRef.current;
    if (!container || !button || !lightTrack || !rightGlow || !leftGlow) return;

    let bound = container.getBoundingClientRect().width / 2 + 12;
    let x = bound;
    let velocity = 0;
    let target = bound;
    let inside = false;
    let last = 0;

    const measure = () => {
      bound = container.getBoundingClientRect().width / 2 + 12;
    };

    const paint = () => {
      lightTrack.style.setProperty("--light-x", x.toFixed(2) + "px");
      const normalized = Math.max(-1, Math.min(1, x / bound));
      const magnitude = Math.abs(normalized);
      const intensity = Math.pow(magnitude, GLOW_RISE);
      const colorTuning =
        "hue-rotate(" + HUE_SHIFT + "deg)" +
        " saturate(" + (1 + EDGE_SATURATION * magnitude).toFixed(3) + ")" +
        " brightness(" + (1 + EDGE_BRIGHTNESS * magnitude).toFixed(3) + ")";

      rightGlow.style.opacity = (normalized > 0 ? intensity : 0).toFixed(3);
      leftGlow.style.opacity = (normalized < 0 ? intensity : 0).toFixed(3);
      rightGlow.style.filter = colorTuning;
      leftGlow.style.filter = colorTuning;
    };

    measure();
    paint();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => resizeObserver.disconnect();
    }

    const frame = (now = performance.now()) => {
      const delta = Math.min((now - last) / 1000, 0.032);
      last = now;
      const angularFrequency = 2 * Math.PI * FREQUENCY;
      velocity +=
        (angularFrequency * angularFrequency * (target - x) -
          2 * DAMPING * angularFrequency * velocity) *
        delta;
      x += velocity * delta;
      paint();

      if (inside || Math.abs(target - x) > 0.15 || Math.abs(velocity) > 0.6) {
        animationFrameRef.current = requestAnimationFrame(frame);
      } else {
        animationFrameRef.current = null;
        x = target;
        velocity = 0;
        paint();
      }
    };

    const kick = () => {
      if (animationFrameRef.current === null) {
        last = performance.now();
        animationFrameRef.current = requestAnimationFrame(frame);
      }
    };

    container.onpointermove = (event) => {
      const bounds = container.getBoundingClientRect();
      inside = true;
      target = Math.max(-bound, Math.min(bound, event.clientX - (bounds.left + bounds.width / 2)));
      kick();
    };

    container.onpointerleave = () => {
      inside = false;
      target = x;
      kick();
    };

    button.onfocus = () => {
      inside = false;
      target = 0;
      kick();
    };

    button.onblur = () => {
      inside = false;
      target = x;
      kick();
    };

    return () => {
      resizeObserver.disconnect();
      container.onpointermove = null;
      container.onpointerleave = null;
      button.onfocus = null;
      button.onblur = null;
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`edge-light-button edge-light-button--icon ${className || ""}`}>
      <span ref={rightGlowRef} className="edge-light-button__glow" aria-hidden="true">
        <span className="edge-light-button__outer-glow" />
        <span className="edge-light-button__inner-glow" />
        <span className="edge-light-button__rim"><span className="edge-light-button__rim-glow" /></span>
      </span>
      <span ref={leftGlowRef} className="edge-light-button__glow edge-light-button__glow--mirrored" aria-hidden="true">
        <span className="edge-light-button__outer-glow" />
        <span className="edge-light-button__inner-glow" />
        <span className="edge-light-button__rim"><span className="edge-light-button__rim-glow" /></span>
      </span>
      <button ref={buttonRef} type="button" onClick={onClick} className="edge-light-button__control group" aria-label={direction === "left" ? "Anterior" : "Próximo"}>
        <span ref={lightTrackRef} className="edge-light-button__light-track" aria-hidden="true">
          <span className="edge-light-button__light-core" />
          <span className="edge-light-button__light-bloom" />
        </span>
        <span className="relative grid w-[24px] h-[24px] place-items-center">
          {direction === "left" ? (
            <>
              <ChevronLeft className="absolute transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-x-[24px] group-hover:opacity-0 text-black" size={24} />
              <ChevronLeft className="absolute translate-x-[24px] opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:opacity-1 text-crono-accent" size={24} />
            </>
          ) : (
            <>
              <ChevronRight className="absolute transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-[24px] group-hover:opacity-0 text-black" size={24} />
              <ChevronRight className="absolute -translate-x-[24px] opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:opacity-1 text-crono-accent" size={24} />
            </>
          )}
        </span>
      </button>
    </div>
  );
}
