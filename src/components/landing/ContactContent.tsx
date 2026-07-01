"use client";

import { motion } from "framer-motion";
import { AnimatedPageHero } from "./AnimatedPageHero";
import { GlowOrbs } from "./GlowOrbs";
import { AnimatedReveal, FadeUpItem } from "./AnimatedReveal";
import { contactReasons } from "@/lib/content";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactContent() {
  return (
    <main className="overflow-x-hidden">
      <AnimatedPageHero
        title="Contact us"
        highlight="Contact"
        description="Book a demo, explore a partnership, or ask a question—we typically respond within one business day."
      />

      <section className="relative border-t border-border/50 pb-24">
        <GlowOrbs variant="fuchsia" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimatedReveal className="lg:col-span-2">
              <FadeUpItem>
                <h2 className="text-lg font-semibold">Other ways to reach us</h2>
              </FadeUpItem>
              <FadeUpItem>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="rounded-2xl border border-border/60 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-4">
                    <span className="font-medium text-foreground">Email</span>
                    <a
                      href="mailto:hello@neuraquadai.com"
                      className="mt-1 block text-link-accent hover:underline"
                    >
                      hello@neuraquadai.com
                    </a>
                  </li>
                  <li className="rounded-2xl border border-border/60 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 p-4">
                    <span className="font-medium text-foreground">
                      Response time
                    </span>
                    <p className="mt-1 text-muted">Within 1 business day</p>
                  </li>
                  <li className="rounded-2xl border border-border/60 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-4">
                    <span className="font-medium text-foreground">
                      Enterprise
                    </span>
                    <p className="mt-1 text-muted">
                      Custom demos and security reviews available on request.
                    </p>
                  </li>
                </ul>
              </FadeUpItem>
            </AnimatedReveal>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm backdrop-blur-sm">
                <h2 className="text-lg font-semibold">Send a message</h2>
                <p className="mt-1 text-sm text-muted">
                  Fill out the form and we&apos;ll get back to you shortly.
                </p>

                <form className="mt-8 space-y-5" action="#" method="post">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium">
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={inputClass}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium">
                        Work email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      className={inputClass}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-reason" className="block text-sm font-medium">
                      How can we help?
                    </label>
                    <select
                      id="contact-reason"
                      name="reason"
                      required
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {contactReasons.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClass} resize-y`}
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gradient w-full py-3 sm:w-auto sm:px-10"
                  >
                    Send message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
