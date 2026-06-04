"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { GlowOrbs } from "./GlowOrbs";
import { AnimatedReveal, FadeUpItem, StaggerContainer, fadeUp } from "./AnimatedReveal";
import { pricingTiers } from "@/lib/content";

export function PricingContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="Pricing"
        highlight="Pricing"
        description="Start free during beta. Scale when you're ready—no hidden fees."
      />

      <section className="relative pb-24">
        <GlowOrbs variant="fuchsia" />
        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <motion.article
                key={tier.name}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
                className={`flex flex-col rounded-2xl border p-6 shadow-sm backdrop-blur-sm ${
                  tier.highlighted
                    ? "border-violet-300 bg-gradient-to-br from-violet-100/80 via-fuchsia-50/60 to-cyan-50/40 shadow-violet-200/40"
                    : `border-border/60 bg-gradient-to-br ${tier.gradient}`
                }`}
              >
                {tier.highlighted && (
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-4 w-fit rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-2.5 py-0.5 text-xs font-medium text-white"
                  >
                    Most popular
                  </motion.span>
                )}
                <h2 className="text-lg font-semibold">{tier.name}</h2>
                <div className="mt-3">
                  <span
                    className={`text-3xl font-semibold ${
                      tier.highlighted ? "gradient-text" : ""
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-2 text-sm text-muted">{tier.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="text-violet-600" aria-hidden>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Link
                    href={
                      tier.name === "Enterprise"
                        ? "mailto:hello@neuraquadai.com"
                        : "/get-started"
                    }
                    className={
                      tier.highlighted
                        ? "btn-gradient block py-3 text-center"
                        : "block rounded-full bg-foreground py-3 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
                    }
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </StaggerContainer>

          <AnimatedReveal className="mt-12 text-center">
            <FadeUpItem>
              <p className="text-sm text-muted">
                All plans include a 14-day trial on paid tiers. Questions?{" "}
                <a
                  href="mailto:hello@neuraquadai.com"
                  className="font-medium text-violet-600 hover:underline"
                >
                  Contact us
                </a>
              </p>
            </FadeUpItem>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
