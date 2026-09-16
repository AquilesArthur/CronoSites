import { motion } from "motion/react";
import React from "react";

export function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black z-[9999] fixed inset-0">
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
