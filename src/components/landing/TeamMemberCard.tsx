"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./AnimatedReveal";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
  gradient: string;
};

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br ${member.gradient} shadow-sm backdrop-blur-sm`}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name} profile photo`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold">{member.name}</h3>
        <p className="text-sm text-violet-700">{member.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {member.bio}
        </p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800"
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </motion.article>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
