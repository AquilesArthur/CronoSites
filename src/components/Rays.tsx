import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface RaysProps {
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Rays({ backgroundColor = "var(--color-crono-bg)", className, style, ...props }: RaysProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      {/* Light rays layer 1 (Main beams) - Denser distribution across 0% to 50% (Bottom hemisphere) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[120vh]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: `conic-gradient(from 90deg at 50% -10%, 
            rgba(16, 185, 129, 0.15) 0%, transparent 5%, 
            rgba(16, 185, 129, 0.4) 10%, transparent 15%, 
            rgba(16, 185, 129, 0.2) 20%, transparent 25%, 
            rgba(16, 185, 129, 0.5) 30%, transparent 35%, 
            rgba(16, 185, 129, 0.15) 40%, transparent 45%,
            rgba(16, 185, 129, 0.3) 48%, transparent 50%,
            transparent 100%
          )`,
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
        }}
      />

      {/* Light rays layer 2 (Offset beams for shimmering effect & filling gaps) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[120vh]"
        animate={{ opacity: [0.6, 0.2, 0.6] }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: `conic-gradient(from 90deg at 50% -10%, 
            transparent 2%, 
            rgba(16, 185, 129, 0.3) 7%, transparent 12%, 
            rgba(16, 185, 129, 0.5) 17%, transparent 22%, 
            rgba(16, 185, 129, 0.15) 27%, transparent 32%, 
            rgba(16, 185, 129, 0.4) 37%, transparent 42%,
            rgba(16, 185, 129, 0.2) 47%, transparent 50%,
            transparent 100%
          )`,
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
        }}
      />
      
      {/* Central glowing orb at the absolute top */}
      <motion.div 
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[400px] rounded-[100%] blur-[120px]"
        style={{ backgroundColor: "rgba(16, 185, 129, 0.35)" }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
