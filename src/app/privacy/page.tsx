import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalContent } from "@/components/landing/LegalContent";
import { privacySections } from "@/lib/content";

export const metadata = {
  title: "Privacy Policy — Neuraquadai",
  description: "How Neuraquadai collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalContent
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information and data."
        sections={privacySections}
        sibling={{ href: "/terms", label: "Terms of Service" }}
      />
      <Footer />
    </>
  );
}
