import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesContent } from "@/components/landing/FeaturesContent";

export const metadata = {
  title: "Features — Neuraquadai",
  description:
    "Explore AI automation, document intelligence, and enterprise capabilities.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <FeaturesContent />
      <Footer />
    </>
  );
}
