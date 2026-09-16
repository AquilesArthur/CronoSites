import { motion } from "motion/react";
import React from "react";
import { cn } from "@/src/lib/utils";

interface HighlightedTextProps {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "center";
  className?: string;
  style?: React.CSSProperties;
}

export function HighlightedText({
  children,
  delay = 0,
  from = "left",
  className,
  ...props
}: HighlightedTextProps) {
  const originMap = {
    left: "left",
    right: "right",
    center: "center",
  };

  return (
    <span className={cn("relative inline-block whitespace-nowrap px-1", className)} {...props}>
      <motion.span
        className="absolute inset-0 bg-white rounded-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: originMap[from] }}
      />
      <motion.span
        initial={{ color: "rgba(255,255,255,0.9)" }}
        whileInView={{ color: "#000000" }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: delay + 0.1 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </span>
  );
}
