"use client";

import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { AnimatedCTA } from "./AnimatedCTA";
import { GlowOrbs } from "./GlowOrbs";
import { StaggerContainer, fadeUp } from "./AnimatedReveal";
import { testimonials } from "@/lib/content";

export function TestimonialsContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="Testimonials"
        highlight="Testimonials"
        description="Hear from teams who partnered with us early to shape what we're building."
      />

      <section className="relative border-t border-border/50 pb-12">
        <GlowOrbs variant="cyan" />
        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.author}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br ${item.gradient} p-6 shadow-sm backdrop-blur-sm`}
              >
                <motion.span
                  className="text-4xl leading-none text-violet-300"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  aria-hidden
                >
                  &ldquo;
                </motion.span>
                <p className="mt-2 flex-1 leading-relaxed">{item.quote}</p>
                <footer className="mt-6 border-t border-border/50 pt-4">
                  <cite className="not-italic">
                    <span className="font-medium">{item.author}</span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {item.role}, {item.company}
                    </span>
                  </cite>
                </footer>
                <motion.div
                  className="mt-3 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.blockquote>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedCTA
        title="Join our early partners"
        description="We're looking for design partners to help refine our platform."
        buttonText="Apply for early access"
      />
    </main>
  );
}
