import { motion, HTMLMotionProps } from "motion/react";
import React from "react";
import { cn } from "@/src/lib/utils";

interface BlurRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function BlurReveal({ children, className, delay = 0, ...props }: BlurRevealProps) {
  return (
    <motion.div
      initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
