import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-xs text-muted">
      <p>
        {site.name} · {site.location} · Built with Next.js and Tailwind.
      </p>
    </footer>
  );
}
