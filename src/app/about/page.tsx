import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/landing/AboutContent";

export const metadata = {
  title: "About — Neuraquadai",
  description:
    "Learn about Neuraquadai's mission, values, and journey building practical AI.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}
