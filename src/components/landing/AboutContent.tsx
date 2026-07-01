"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { AnimatedCTA } from "./AnimatedCTA";
import { GlowOrbs } from "./GlowOrbs";
import {
  AnimatedReveal,
  FadeUpItem,
  StaggerContainer,
  fadeUp,
} from "./AnimatedReveal";
import { aboutValues, aboutMilestones, aboutTeam } from "@/lib/content";
import { TeamMemberCard } from "./TeamMemberCard";

export function AboutContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="About Neuraquadai"
        highlight="Neuraquadai"
        description="We're building practical AI for teams who need results—not hype. Here's who we are and what we believe."
      />

      <section className="relative border-t border-border/50 py-16">
        <GlowOrbs variant="mixed" />
        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-2xl font-semibold tracking-tight">
                Our <span className="gradient-text">mission</span>
              </h2>
            </FadeUpItem>
            <FadeUpItem>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Neuraquadai exists to make intelligent automation accessible,
                trustworthy, and useful for real businesses. We partner with
                forward-looking teams during our build phase so every product
                decision is grounded in actual workflows—not assumptions.
              </p>
            </FadeUpItem>
          </AnimatedReveal>
        </div>
      </section>

      <section className="relative bg-section-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-xl font-semibold">What we believe</h2>
            </FadeUpItem>
          </AnimatedReveal>
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutValues.map((value) => (
              <motion.article
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border border-border/60 bg-gradient-to-br ${value.gradient} p-6 shadow-sm`}
              >
                <h3 className="font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-16">
        <GlowOrbs variant="cyan" />
        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-xl font-semibold">Our journey</h2>
            </FadeUpItem>
          </AnimatedReveal>
          <StaggerContainer className="mt-10 space-y-4">
            {aboutMilestones.map((milestone) => (
              <motion.div
                key={milestone.year}
                variants={fadeUp}
                className="flex gap-6 rounded-2xl border border-border/60 bg-card-subtle p-5 shadow-sm backdrop-blur-sm"
              >
                <span className="shrink-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-1 text-sm font-medium text-white">
                  {milestone.year}
                </span>
                <p className="text-muted">{milestone.event}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="team" className="relative border-t border-border/50 bg-section-alt py-16">
        <GlowOrbs variant="violet" />
        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-2xl font-semibold tracking-tight">
                Meet the <span className="gradient-text">team</span>
              </h2>
            </FadeUpItem>
            <FadeUpItem>
              <p className="mt-3 max-w-lg text-muted">
                The people building Neuraquadai—engineers, product leaders, and
                operators committed to practical AI.
              </p>
            </FadeUpItem>
          </AnimatedReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </StaggerContainer>

          <AnimatedReveal className="mt-12 text-center">
            <FadeUpItem>
              <p className="text-sm text-muted">
                Want to join us? We&apos;re always open to exceptional talent.
              </p>
            </FadeUpItem>
            <FadeUpItem>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-border px-8 py-3 text-sm font-medium shadow-sm hover:shadow-md"
                >
                  Get in touch
                </Link>
              </motion.div>
            </FadeUpItem>
          </AnimatedReveal>
        </div>
      </section>

      <AnimatedCTA
        title="Want to build with us?"
        description="Join as a design partner or start with our free beta today."
        buttonText="Get started free"
        secondary={{ text: "Contact us", href: "/contact" }}
      />
    </main>
  );
}
