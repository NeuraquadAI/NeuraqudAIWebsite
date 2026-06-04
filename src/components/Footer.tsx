import Link from "next/link";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const accountLinks = [
  { href: "/login", label: "Log in" },
  { href: "/get-started", label: "Get started" },
];

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
        {title}
      </p>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterGroup title="Product" links={productLinks} />
          <FooterGroup title="Company" links={companyLinks} />
          <FooterGroup title="Legal" links={legalLinks} />
          <FooterGroup title="Account" links={accountLinks} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted sm:flex-row">
          <Link href="/" className="font-medium text-foreground">
            Neuraquadai
          </Link>
          <p>© {new Date().getFullYear()} Neuraquadai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
