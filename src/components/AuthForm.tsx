import Link from "next/link";

type AuthFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
  alternateText: string;
  alternateHref: string;
  alternateLinkText: string;
  fields: "login" | "signup";
};

export function AuthForm({
  title,
  subtitle,
  submitLabel,
  alternateText,
  alternateHref,
  alternateLinkText,
  fields,
}: AuthFormProps) {
  return (
    <div className="mx-auto w-full max-w-md px-6">
      <div className="rounded-2xl border border-border bg-card-solid p-8">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>

        <form className="mt-8 space-y-5" action="#" method="post">
          {fields === "signup" && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Jane Smith"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete={
                fields === "login" ? "current-password" : "new-password"
              }
              className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="••••••••"
            />
          </div>

          {fields === "signup" && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Acme Inc."
              />
            </div>
          )}

          {fields === "login" && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-accent hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {submitLabel}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          {alternateText}{" "}
          <Link href={alternateHref} className="font-medium text-accent hover:underline">
            {alternateLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
