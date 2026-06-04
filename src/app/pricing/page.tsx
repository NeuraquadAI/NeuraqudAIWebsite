import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingContent } from "@/components/landing/PricingContent";

export const metadata = {
  title: "Pricing — Neuraquadai",
  description: "Simple, transparent pricing for teams of every size.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingContent />
      <Footer />
    </>
  );
}
