"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(
  () => import("./Hero3D").then((m) => ({ default: m.Hero3D })),
  { ssr: false }
);

type AnimatedPageHeroProps = {
  title: string;
  highlight?: string;
  description: string;
};

export function AnimatedPageHero({
  title,
  highlight,
  description,
}: AnimatedPageHeroProps) {
  const titleParts = highlight ? title.split(highlight) : [title];
  const showSplit =
    highlight && title.includes(highlight) && title !== highlight;

  return (
    <section className="relative overflow-hidden">
      <Hero3D compact />
      <div className="hero-mesh absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {showSplit ? (
            <>
              {titleParts[0]}
              <span className="gradient-text">{highlight}</span>
              {titleParts[1]}
            </>
          ) : (
            <span className="gradient-text">{title}</span>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 max-w-2xl text-lg text-muted"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
