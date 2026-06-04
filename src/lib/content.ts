export const features = [
  {
    title: "Workflow automation",
    description:
      "Connect your tools and let AI handle repetitive tasks—routing, summarization, and approvals on autopilot.",
    icon: "⚡",
    gradient: "from-violet-500/20 to-indigo-500/10",
    hover: "hover:border-violet-300 hover:shadow-violet-200/50",
  },
  {
    title: "Document intelligence",
    description:
      "Extract, classify, and search across contracts, reports, and knowledge bases with domain-tuned models.",
    icon: "📄",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    hover: "hover:border-fuchsia-300 hover:shadow-fuchsia-200/50",
  },
  {
    title: "Support copilots",
    description:
      "Assist agents with suggested replies, context retrieval, and escalation signals grounded in your data.",
    icon: "💬",
    gradient: "from-cyan-500/20 to-blue-500/10",
    hover: "hover:border-cyan-300 hover:shadow-cyan-200/50",
  },
  {
    title: "Custom model training",
    description:
      "Fine-tune models on your data with guardrails, evaluation suites, and deployment pipelines built in.",
    icon: "🧠",
    gradient: "from-indigo-500/20 to-violet-500/10",
    hover: "hover:border-indigo-300 hover:shadow-indigo-200/50",
  },
  {
    title: "Analytics & monitoring",
    description:
      "Track usage, latency, and quality metrics with dashboards designed for ML ops and product teams.",
    icon: "📊",
    gradient: "from-emerald-500/15 to-cyan-500/10",
    hover: "hover:border-emerald-300 hover:shadow-emerald-200/50",
  },
  {
    title: "Enterprise security",
    description:
      "SOC2-ready patterns, role-based access, audit logs, and options for private cloud deployment.",
    icon: "🔒",
    gradient: "from-amber-500/15 to-orange-500/10",
    hover: "hover:border-amber-300 hover:shadow-amber-200/50",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "during beta",
    description: "For small teams exploring AI automation.",
    features: [
      "Up to 3 workflows",
      "5,000 AI actions / month",
      "Email support",
      "Community access",
    ],
    cta: "Get started",
    highlighted: false,
    gradient: "from-slate-50 to-violet-50/50",
  },
  {
    name: "Pro",
    price: "$49",
    period: "per seat / month",
    description: "For growing teams shipping AI into production.",
    features: [
      "Unlimited workflows",
      "50,000 AI actions / month",
      "Priority support",
      "Custom integrations",
      "Analytics dashboard",
    ],
    cta: "Start free trial",
    highlighted: true,
    gradient: "from-violet-100/80 via-fuchsia-50/60 to-cyan-50/40",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to you",
    description: "For organizations with advanced security and scale needs.",
    features: [
      "Dedicated infrastructure",
      "Custom models & SLAs",
      "SSO & advanced RBAC",
      "Dedicated success manager",
      "On-premise options",
    ],
    cta: "Contact sales",
    highlighted: false,
    gradient: "from-cyan-50/50 to-indigo-50/50",
  },
];

export const testimonials = [
  {
    quote:
      "Neuraquadai helped us automate 40% of our support triage in the first month. The team understood our domain quickly.",
    author: "Sarah Chen",
    role: "Head of Operations",
    company: "Meridian Labs",
    gradient: "from-violet-500/15 to-indigo-500/5",
  },
  {
    quote:
      "We evaluated several AI vendors. Neuraquadai stood out for transparent pricing and models we could actually audit.",
    author: "James Okonkwo",
    role: "CTO",
    company: "Stackline",
    gradient: "from-fuchsia-500/15 to-pink-500/5",
  },
  {
    quote:
      "The document intelligence pipeline cut our contract review time in half. Early access was worth the wait.",
    author: "Elena Vasquez",
    role: "General Counsel",
    company: "Northbridge Group",
    gradient: "from-cyan-500/15 to-blue-500/5",
  },
  {
    quote:
      "Their applied ML team didn't just ship a demo—they built monitoring and rollback paths we needed for production.",
    author: "David Park",
    role: "VP Engineering",
    company: "Catalyst AI",
    gradient: "from-indigo-500/15 to-violet-500/5",
  },
];

export const faqs = [
  {
    question: "What is Neuraquadai building?",
    answer:
      "We're building an AI-native automation platform, enterprise AI solutions, and applied ML systems. Many features are in active development—we partner with early clients to shape the roadmap.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Our Starter tier is free during the beta period and includes core workflow automation with usage limits. Upgrade anytime as your needs grow.",
  },
  {
    question: "How does enterprise pricing work?",
    answer:
      "Enterprise plans are customized based on volume, security requirements, deployment model, and support level. Contact us for a tailored quote.",
  },
  {
    question: "Can I use my own data to train models?",
    answer:
      "Pro and Enterprise plans support fine-tuning on your data. We provide evaluation tooling, guardrails, and deployment options to keep models reliable in production.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Data is encrypted in transit and at rest. Enterprise customers can choose dedicated infrastructure or private cloud deployment. We never use your data to train shared models without consent.",
  },
  {
    question: "When will features leave beta?",
    answer:
      "We're rolling out capabilities incrementally. Beta participants get early access and preferential pricing when we launch general availability.",
  },
];

export const aboutValues = [
  {
    title: "Practical first",
    description:
      "We ship tools that solve real problems—not demos that impress in a meeting but fail in production.",
    gradient: "from-violet-500/20 to-indigo-500/10",
  },
  {
    title: "Trust by design",
    description:
      "Transparency, guardrails, and human oversight are built into every system we deploy.",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
  },
  {
    title: "Partner early",
    description:
      "We co-build with design partners so our roadmap reflects what teams actually need.",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
];

export const aboutMilestones = [
  { year: "2025", event: "Neuraquadai founded — focus on applied AI & automation" },
  { year: "2026", event: "Beta program open — automation platform & enterprise pilots" },
  { year: "Next", event: "General availability — expanded integrations & security certifications" },
];

export const aboutTeam = [
  {
    name: "Dennis Mureithi",
    role: "CEO & Co-founder",
    bio: "Former product lead at an enterprise SaaS company. Dennis focuses on turning complex AI capabilities into tools teams actually adopt.",
    linkedin: "https://www.linkedin.com/in/dennis-muthuyia-68814a23/",
    image: "/team/dennis-mureithi.svg",
    gradient: "from-violet-500/20 to-indigo-500/10",
  },
  {
    name: "Samuel Kamotho",
    role: "CTO & Co-founder",
    bio: "ML engineer with a decade in production systems. Sam architects Neuraquadai's platform for reliability, scale, and safe deployment.",
    linkedin: "https://www.linkedin.com/in/samuel-kamotho-03b04b1a0/",
    image: "/team/samuel-kamotho.svg",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
  },
  {
    name: "Javan Kyalo",
    role: "Head of Applied ML",
    bio: "Research-minded engineer who bridges notebooks and prod.Javan leads model evaluation, fine-tuning, and monitoring practices.",
    linkedin: "https://www.linkedin.com/in/javan-kyalo-b9b306207/",
    image: "/team/javan-kyalo.svg",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "Vincent Kigen",
    role: "Head of Product",
    bio: "Design-led product thinker obsessed with workflow clarity. Vincent shapes how customers experience automation day to day.",
    linkedin: "https://www.linkedin.com/in/vincent-kigen-80356554/",
    image: "/team/vincent-kigen.svg",
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
];

export const contactReasons = [
  { value: "demo", label: "Book a demo" },
  { value: "partnership", label: "Design partnership" },
  { value: "enterprise", label: "Enterprise / sales" },
  { value: "support", label: "Support" },
  { value: "other", label: "Other" },
];

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      'Neuraquadai ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or participate in our beta program.',
      "By using our services, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    paragraphs: ["We may collect the following types of information:"],
    list: [
      "Account information: name, email address, company name, and credentials you provide when signing up.",
      "Usage data: how you interact with our platform, including logs, feature usage, and performance metrics.",
      "Content you submit: documents, prompts, and workflow data processed through our AI services.",
      "Communications: messages you send us via contact forms, email, or support channels.",
      "Technical data: IP address, browser type, device information, and cookies (see Section 6).",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use your information",
    paragraphs: ["We use collected information to:"],
    list: [
      "Provide, operate, and improve our AI products and services.",
      "Process your requests, support tickets, and beta applications.",
      "Send service-related communications and, with consent, product updates.",
      "Monitor security, prevent fraud, and enforce our terms.",
      "Comply with legal obligations and respond to lawful requests.",
    ],
  },
  {
    id: "ai-data",
    title: "4. AI & your data",
    paragraphs: [
      "We do not use your confidential data to train shared models without your explicit consent. Customer content is processed to deliver the service you request and is handled according to your plan and any applicable data processing agreement.",
      "Enterprise customers may request dedicated infrastructure, data residency options, and custom retention policies.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing of information",
    paragraphs: [
      "We do not sell your personal information. We may share data with trusted subprocessors (e.g., cloud hosting, analytics) under strict contractual obligations, when required by law, or with your consent.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies",
    paragraphs: [
      "We use essential cookies to operate our site and may use analytics cookies to understand usage. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    id: "retention",
    title: "7. Data retention",
    paragraphs: [
      "We retain personal data only as long as necessary to provide services, fulfill legal obligations, resolve disputes, and enforce agreements. You may request deletion subject to applicable law and active contracts.",
    ],
  },
  {
    id: "rights",
    title: "8. Your rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to object to or restrict certain processing. Contact us at hello@neuraquadai.com to exercise these rights.",
    ],
  },
  {
    id: "security",
    title: "9. Security",
    paragraphs: [
      "We implement industry-standard technical and organizational measures to protect your data, including encryption in transit and at rest. No method of transmission over the Internet is 100% secure.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to this policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated "Last updated" date.',
    ],
  },
  {
    id: "contact",
    title: "11. Contact us",
    paragraphs: [
      "For privacy-related questions, contact us at hello@neuraquadai.com.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to terms",
    paragraphs: [
      'These Terms of Service ("Terms") govern your access to and use of Neuraquadai\'s website, products, and services. By accessing or using our services, you agree to be bound by these Terms.',
      "If you do not agree, do not use our services.",
    ],
  },
  {
    id: "services",
    title: "2. Our services",
    paragraphs: [
      "Neuraquadai provides AI-powered automation, document intelligence, and related enterprise solutions. Some features are offered during a beta period and may change, be limited, or discontinued with notice.",
      "We strive for high availability but do not guarantee uninterrupted or error-free service.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information and notify us promptly of unauthorized use.",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable use",
    paragraphs: ["You agree not to:"],
    list: [
      "Use our services for unlawful, harmful, or abusive purposes.",
      "Attempt to reverse engineer, scrape, or circumvent security or usage limits.",
      "Upload content that infringes intellectual property or privacy rights.",
      "Use outputs to mislead others or violate applicable AI regulations.",
      "Resell or sublicense the service without written authorization.",
    ],
  },
  {
    id: "ip",
    title: "5. Intellectual property",
    paragraphs: [
      "Neuraquadai retains all rights in our platform, software, and branding. You retain rights in content you submit. You grant us a limited license to process your content solely to provide the services.",
      "AI-generated outputs may require human review. You are responsible for how you use outputs in your business.",
    ],
  },
  {
    id: "payment",
    title: "6. Payment & billing",
    paragraphs: [
      "Paid plans are billed according to the pricing page. Fees are non-refundable except as required by law or stated in your agreement. We may change pricing with reasonable notice.",
    ],
  },
  {
    id: "beta",
    title: "7. Beta program",
    paragraphs: [
      "Beta features are provided \"as is\" and may contain bugs. We welcome feedback but make no guarantees regarding beta functionality, data retention, or migration paths until general availability.",
    ],
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of warranties",
    paragraphs: [
      'OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEURAQUADAI SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL.",
      "Our total liability for any claim shall not exceed the amount you paid us in the twelve months preceding the claim.",
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    paragraphs: [
      "We may suspend or terminate access for violation of these Terms or for operational reasons. You may cancel your account at any time. Provisions that by nature should survive will survive termination.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing law",
    paragraphs: [
      "These Terms are governed by applicable law in the jurisdiction where Neuraquadai is established, without regard to conflict-of-law principles. Disputes shall be resolved in the courts of that jurisdiction unless otherwise agreed in writing.",
    ],
  },
  {
    id: "contact-terms",
    title: "12. Contact",
    paragraphs: [
      "Questions about these Terms? Email hello@neuraquadai.com.",
    ],
  },
];

export const legalLastUpdated = "May 25, 2026";
