"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AnimatedReveal,
  FadeUpItem,
  StaggerContainer,
  fadeUp,
} from "./AnimatedReveal";

const Hero3D = dynamic(
  () => import("./Hero3D").then((m) => ({ default: m.Hero3D })),
  { ssr: false }
);

const projects = [
  {
    status: "In development",
    title: "Intelligent automation platform",
    description:
      "An AI-native workflow engine that helps teams automate repetitive tasks, route decisions, and surface insights from your data.",
    gradient: "from-violet-500/20 to-indigo-500/10",
  },
  {
    status: "In development",
    title: "Enterprise AI solutions",
    description:
      "Custom models and integrations tailored to your business—document intelligence, support copilots, and domain-specific assistants.",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
  },
  {
    status: "Research",
    title: "Applied ML systems",
    description:
      "Exploring reliable, production-grade machine learning pipelines—from training infrastructure to monitoring and safe deployment.",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
];

const highlights = [
  {
    href: "/features",
    label: "Features",
    desc: "Automation, copilots & more",
    color: "hover:border-violet-300 hover:shadow-violet-200/50",
  },
  {
    href: "/pricing",
    label: "Pricing",
    desc: "Free beta, scale when ready",
    color: "hover:border-fuchsia-300 hover:shadow-fuchsia-200/50",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    desc: "From early partners",
    color: "hover:border-cyan-300 hover:shadow-cyan-200/50",
  },
  {
    href: "/faq",
    label: "FAQ",
    desc: "Common questions answered",
    color: "hover:border-indigo-300 hover:shadow-indigo-200/50",
  },
];

const cardHover = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.03,
    rotateX: -4,
    rotateY: 4,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function HomeContent() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh]">
        <Hero3D />
        <div className="hero-mesh absolute inset-0 -z-10" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-violet-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-violet-700 shadow-sm backdrop-blur-sm"
          >
            AI company · Building in public
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Intelligent systems</span> for what
            comes next
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Neuraquadai is an AI company focused on practical, trustworthy
            intelligence—products and custom solutions designed for real
            business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/get-started" className="btn-gradient">
              Get started free
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-white/80 bg-white/60 px-6 py-3 text-sm font-medium shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
            >
              Explore features
            </Link>
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 flex flex-wrap gap-3"
          >
            {["3 products in dev", "Beta open", "Enterprise ready"].map(
              (pill, i) => (
                <motion.span
                  key={pill}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-full border border-border/80 bg-white/50 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm"
                >
                  {pill}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick links */}
      <section className="relative border-t border-border/50 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <motion.div key={item.href} variants={fadeUp}>
                <Link href={item.href} className="block perspective-1000">
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    style={{ transformStyle: "preserve-3d" }}
                    className={`rounded-2xl border border-border bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-shadow ${item.color}`}
                  >
                    <h2 className="font-medium">{item.label}</h2>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Building */}
      <section id="building" className="relative py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-transparent to-cyan-50/60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                What we&apos;re{" "}
                <span className="gradient-text">building</span>
              </h2>
            </FadeUpItem>
            <FadeUpItem>
              <p className="mt-3 max-w-lg text-muted">
                A preview of our current focus areas. We&apos;re actively
                developing these for future clients and partners.
              </p>
            </FadeUpItem>
          </AnimatedReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br ${project.gradient} p-6 shadow-sm backdrop-blur-sm`}
              >
                <span className="mb-4 w-fit rounded-full border border-white/60 bg-white/70 px-2.5 py-0.5 text-xs font-medium text-violet-700 backdrop-blur-sm">
                  {project.status}
                </span>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-border/50 bg-white py-24"
      >
        <motion.div
          className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedReveal>
            <FadeUpItem>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                About us
              </h2>
            </FadeUpItem>
            <FadeUpItem>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                We believe AI should be useful, understandable, and built with
                care. Neuraquadai works with forward-looking teams who want
                intelligent tools—not hype—integrated into how they already
                operate.
              </p>
            </FadeUpItem>
            <FadeUpItem>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Whether you need a product we&apos;re shipping or a bespoke
                solution, we partner early to shape what we build together.
              </p>
            </FadeUpItem>
          </AnimatedReveal>

          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { label: "Focus", value: "Applied AI & automation" },
              { label: "Stage", value: "Active development" },
              { label: "Clients", value: "Early partners welcome" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-white to-violet-50/50 p-6"
              >
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="mt-1 text-lg font-medium">{item.value}</dd>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-100/50 via-fuchsia-50/30 to-transparent" />
        <AnimatedReveal className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeUpItem>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Interested in what we&apos;re building?
            </h2>
          </FadeUpItem>
          <FadeUpItem>
            <p className="mx-auto mt-3 max-w-md text-muted">
              We&apos;re open to conversations with future clients, design
              partners, and investors.
            </p>
          </FadeUpItem>
          <FadeUpItem>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="btn-gradient">
                  Contact us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/get-started"
                  className="inline-block rounded-full border border-border bg-white px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:shadow-md"
                >
                  Get started
                </Link>
              </motion.div>
            </div>
          </FadeUpItem>
        </AnimatedReveal>
      </section>
    </main>
  );
}
