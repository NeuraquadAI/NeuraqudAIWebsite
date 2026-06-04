import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialsContent } from "@/components/landing/TestimonialsContent";

export const metadata = {
  title: "Testimonials — Neuraquadai",
  description:
    "What early partners and clients say about working with Neuraquadai.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsContent />
      <Footer />
    </>
  );
}
