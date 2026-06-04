"use client";

import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { AnimatedCTA } from "./AnimatedCTA";
import { GlowOrbs } from "./GlowOrbs";
import { StaggerContainer, fadeUp } from "./AnimatedReveal";
import { features } from "@/lib/content";

export function FeaturesContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="Features"
        highlight="Features"
        description="Everything you need to bring practical AI into your workflows—from automation to custom models."
      />

      <section className="relative border-t border-border/50 py-16">
        <GlowOrbs variant="violet" />
        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`group rounded-2xl border border-border/60 bg-gradient-to-br ${feature.gradient} p-6 shadow-sm backdrop-blur-sm transition-shadow ${feature.hover}`}
              >
                <motion.span
                  className="inline-block text-3xl"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  {feature.icon}
                </motion.span>
                <h2 className="mt-4 text-lg font-medium">{feature.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
                <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedCTA
        title="Ready to see it in action?"
        description="Start free during beta—no credit card required."
        buttonText="Get started free"
      />
    </main>
  );
}
