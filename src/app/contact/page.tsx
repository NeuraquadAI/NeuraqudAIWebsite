import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/landing/ContactContent";

export const metadata = {
  title: "Contact — Neuraquadai",
  description:
    "Get in touch with Neuraquadai for demos, partnerships, and enterprise inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}
