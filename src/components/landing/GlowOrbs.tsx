"use client";

import { motion } from "framer-motion";

type GlowOrbsProps = {
  variant?: "violet" | "fuchsia" | "cyan" | "mixed";
};

const variants = {
  violet: [
    "bg-violet-300/30 -right-32 top-1/3",
    "bg-indigo-300/25 -left-24 top-1/4",
  ],
  fuchsia: [
    "bg-fuchsia-300/30 -right-28 top-1/2",
    "bg-pink-300/25 -left-20 bottom-1/4",
  ],
  cyan: [
    "bg-cyan-300/30 -right-32 bottom-1/3",
    "bg-blue-300/25 -left-24 top-1/3",
  ],
  mixed: [
    "bg-violet-300/30 -right-32 top-1/3",
    "bg-cyan-300/25 -left-24 top-1/2",
    "bg-fuchsia-300/20 right-1/4 bottom-1/4",
  ],
};

export function GlowOrbs({ variant = "mixed" }: GlowOrbsProps) {
  const classes = variants[variant];

  return (
    <>
      {classes.map((cls, i) => (
        <motion.div
          key={cls}
          className={`absolute h-48 w-48 rounded-full blur-3xl md:h-64 md:w-64 ${cls}`}
          animate={{
            scale: [1, 1.15 + i * 0.05, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}
    </>
  );
}
