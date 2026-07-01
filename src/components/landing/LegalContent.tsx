"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { GlowOrbs } from "./GlowOrbs";
import { AnimatedReveal, FadeUpItem, StaggerContainer, fadeUp } from "./AnimatedReveal";
import type { LegalSection } from "@/lib/content";
import { legalLastUpdated } from "@/lib/content";

type LegalContentProps = {
  title: string;
  description: string;
  sections: LegalSection[];
  sibling?: { href: string; label: string };
};

export function LegalContent({
  title,
  description,
  sections,
  sibling,
}: LegalContentProps) {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero title={title} description={description} />

      <section className="relative border-t border-border/50 pb-24">
        <GlowOrbs variant="violet" />
        <div className="relative mx-auto max-w-3xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <p className="mb-8 text-sm text-muted">
                Last updated: {legalLastUpdated}
                {sibling && (
                  <>
                    {" · "}
                    <Link href={sibling.href} className="text-link-accent hover:underline">
                      {sibling.label}
                    </Link>
                  </>
                )}
              </p>
            </FadeUpItem>
          </AnimatedReveal>

          <StaggerContainer className="space-y-8">
            {sections.map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                variants={fadeUp}
                className="rounded-2xl border border-border/60 bg-card-subtle p-6 shadow-sm backdrop-blur-sm"
              >
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item.slice(0, 40)}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.section>
            ))}
          </StaggerContainer>

          <AnimatedReveal className="mt-12">
            <FadeUpItem>
              <p className="text-center text-xs text-muted">
                This document is a general template for your startup website. Have
                it reviewed by qualified legal counsel before relying on it.
              </p>
            </FadeUpItem>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}