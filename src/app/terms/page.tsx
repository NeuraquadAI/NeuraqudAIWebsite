import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalContent } from "@/components/landing/LegalContent";
import { termsSections } from "@/lib/content";

export const metadata = {
  title: "Terms of Service — Neuraquadai",
  description: "Terms and conditions for using Neuraquadai products and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalContent
        title="Terms of Service"
        description="The rules and guidelines for using Neuraquadai's website and services."
        sections={termsSections}
        sibling={{ href: "/privacy", label: "Privacy Policy" }}
      />
      <Footer />
    </>
  );
}
