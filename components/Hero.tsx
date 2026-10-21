import { site } from "@/lib/site";

export function Hero() {
  return (
    <header className="py-20 sm:py-28">

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>

      <p className="mt-5 max-w-2xl text-xl leading-snug sm:text-2xl">
        {site.whoami}
      </p>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {site.summary}
      </p>

      <p className="mt-6 text-sm text-muted">
        {site.location}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-md border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Email me
        </a>
        <a
          href={site.cv}
          className="px-1 text-sm text-muted underline underline-offset-4 transition-colors hover:text-accent"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
