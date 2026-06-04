import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthForm } from "@/components/AuthForm";

export const metadata = {
  title: "Log in — Neuraquadai",
  description: "Sign in to your Neuraquadai account.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-8rem)] flex-col justify-center py-24">
        <AuthForm
          title="Welcome back"
          subtitle="Sign in to access your Neuraquadai dashboard."
          submitLabel="Log in"
          alternateText="Don't have an account?"
          alternateHref="/get-started"
          alternateLinkText="Get started"
          fields="login"
        />
      </main>
      <Footer />
    </>
  );
}
