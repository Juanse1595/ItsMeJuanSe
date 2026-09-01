import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">That page doesn&rsquo;t exist.</p>
      <Link
        href="/"
        className="mt-6 text-accent underline underline-offset-4"
      >
        Back home
      </Link>
    </main>
  );
}
