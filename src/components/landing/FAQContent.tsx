"use client";

import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { GlowOrbs } from "./GlowOrbs";
import { AnimatedReveal, FadeUpItem, StaggerContainer, fadeUp } from "./AnimatedReveal";
import { faqs } from "@/lib/content";

export function FAQContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="FAQ"
        highlight="FAQ"
        description="Answers to common questions about our products, pricing, and beta program."
      />

      <section className="relative border-t border-border/50 pb-12">
        <GlowOrbs variant="mixed" />
        <div className="relative mx-auto max-w-3xl px-6">
          <StaggerContainer className="space-y-3">
            {faqs.map((item) => (
              <motion.details
                key={item.question}
                variants={fadeUp}
                className="group rounded-2xl border border-border/60 bg-white/80 px-5 py-1 shadow-sm backdrop-blur-sm transition-colors open:border-violet-200 open:bg-gradient-to-br open:from-violet-50/50 open:to-cyan-50/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium transition-colors hover:text-violet-700 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <motion.span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600"
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </motion.span>
                </summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  className="pb-4 text-sm leading-relaxed text-muted"
                >
                  {item.answer}
                </motion.p>
              </motion.details>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-100/40 to-transparent" />
        <AnimatedReveal className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeUpItem>
            <p className="text-muted">Still have questions?</p>
          </FadeUpItem>
          <FadeUpItem>
            <motion.a
              href="mailto:hello@neuraquadai.com"
              whileHover={{ scale: 1.05 }}
              className="mt-4 inline-block btn-gradient"
            >
              hello@neuraquadai.com
            </motion.a>
          </FadeUpItem>
        </AnimatedReveal>
      </section>
    </main>
  );
}
