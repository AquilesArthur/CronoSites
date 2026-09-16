import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import React from "react";

interface SlideUpTextProps {
  children: string;
  split?: "words" | "chars";
  className?: string;
  key?: React.Key;
}

export function SlideUpText({ children, className, split = "words" }: SlideUpTextProps) {
  const items = split === "words" ? children.split(" ") : children.split("");

  return (
    <div className={cn("inline-flex flex-wrap", className)}>
      {items.map((item, index) => (
        <span key={index} className={cn("overflow-hidden inline-flex", split === "words" ? "mr-[0.25em]" : "")}>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * (split === "words" ? 0.04 : 0.02),
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="inline-block"
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
