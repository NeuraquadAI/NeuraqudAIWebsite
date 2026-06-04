"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedReveal, FadeUpItem } from "./AnimatedReveal";

type AnimatedCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  secondary?: { text: string; href: string };
};

export function AnimatedCTA({
  title = "Ready to get started?",
  description = "Join our beta and shape what we build next.",
  buttonText = "Get started free",
  buttonHref = "/get-started",
  secondary,
}: AnimatedCTAProps) {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-100/50 via-fuchsia-50/30 to-transparent" />
      <AnimatedReveal className="relative mx-auto max-w-5xl px-6 text-center">
        <FadeUpItem>
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
        </FadeUpItem>
        <FadeUpItem>
          <p className="mx-auto mt-2 max-w-md text-muted">{description}</p>
        </FadeUpItem>
        <FadeUpItem>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href={buttonHref} className="btn-gradient">
                {buttonText}
              </Link>
            </motion.div>
            {secondary && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={secondary.href}
                  className="inline-block rounded-full border border-border bg-white px-8 py-3 text-sm font-medium shadow-sm hover:shadow-md"
                >
                  {secondary.text}
                </Link>
              </motion.div>
            )}
          </div>
        </FadeUpItem>
      </AnimatedReveal>
    </section>
  );
}
