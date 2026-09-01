import Link from "next/link";
import { Section } from "./Section";
import { getCaseStudies } from "@/lib/content";

export function SelectedWork() {
  const studies = getCaseStudies();

  return (
    <Section id="work" title="Selected work">
      <ul className="space-y-4">
        {studies.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/work/${s.slug}`}
              className="group block rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <span className="text-xs text-muted">{s.period}</span>
              </div>

              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                {s.outcome}
              </p>

              <p className="mt-4 font-mono text-xs text-muted">
                {s.stack.join(" · ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
