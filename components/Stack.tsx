import { Section } from "./Section";
import { stack } from "@/lib/site";

export function Stack() {
  return (
    <Section id="stack" title="Technologies">
      <dl className="space-y-8">
        {stack.map((group) => (
          <div key={group.label} className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <dt className="text-xs text-muted sm:pt-1.5">{group.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
