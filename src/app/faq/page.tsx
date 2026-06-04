import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQContent } from "@/components/landing/FAQContent";

export const metadata = {
  title: "FAQ — Neuraquadai",
  description:
    "Frequently asked questions about Neuraquadai products and pricing.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQContent />
      <Footer />
    </>
  );
}
