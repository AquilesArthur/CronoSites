import { cn } from "@/src/lib/utils";
import React from "react";

interface TextMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  height?: number;
  prefix?: React.ReactNode;
  className?: string;
}

export function TextMarquee({ children, speed = 1, height = 150, prefix, className, ...props }: TextMarqueeProps) {
  return (
    <div
      className={cn("flex overflow-hidden relative items-center w-full max-w-full bg-black border-y border-white/5", className)}
      style={{ height }}
      {...props}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div
        className="flex items-center min-w-full shrink-0 animate-marquee"
        style={{ animationDuration: `${20 / speed}s` }}
      >
        {prefix && <div className="mr-4">{prefix}</div>}
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex items-center min-w-full shrink-0 animate-marquee"
        style={{ animationDuration: `${20 / speed}s` }}
      >
        {prefix && <div className="mr-4">{prefix}</div>}
        {children}
      </div>
    </div>
  );
}
