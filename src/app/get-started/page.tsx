import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthForm } from "@/components/AuthForm";

export const metadata = {
  title: "Get started — Neuraquadai",
  description: "Create your Neuraquadai account and join the beta.",
};

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-8rem)] flex-col justify-center py-24">
        <AuthForm
          title="Get started"
          subtitle="Create a free account and join our beta program."
          submitLabel="Create account"
          alternateText="Already have an account?"
          alternateHref="/login"
          alternateLinkText="Log in"
          fields="signup"
        />
        <p className="mx-auto mt-6 max-w-md px-6 text-center text-xs text-muted">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-link-accent hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-link-accent hover:underline">
            Privacy Policy
          </Link>
          . No credit card required during beta.
        </p>
      </main>
      <Footer />
    </>
  );
}
