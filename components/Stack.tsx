import * as simpleIcons from "simple-icons";
import { Section } from "./Section";
import { languages, stack } from "@/lib/site";

type SimpleIcon = { path: string; title: string };

function Icon({ name, icon }: { name: string; icon?: string }) {
  const found = icon
    ? (simpleIcons as unknown as Record<string, SimpleIcon>)[icon]
    : undefined;

  if (!found) {
    return (
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded border border-line font-mono text-xs"
      >
        {name.slice(0, 2)}
      </span>
    );
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-8 w-8 fill-current"
    >
      <path d={found.path} />
    </svg>
  );
}

type Item = { name: string; icon?: string };

// Repeat short lists so one copy is always wider than the viewport.
const MIN_ITEMS = 12;

function Items({ items, hidden = false }: { items: Item[]; hidden?: boolean }) {
  const repeated = Array.from(
    { length: Math.ceil(MIN_ITEMS / items.length) },
    () => items,
  ).flat();
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {repeated.map((item, i) => (
        <li
          key={i}
          className="flex w-24 flex-col items-center gap-2 text-muted transition-colors hover:text-fg"
        >
          <Icon name={item.name} icon={item.icon} />
          <span className="text-center text-xs">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

function Marquee({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        <Items items={items} />
        <Items items={items} hidden />
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <Section id="stack" title="Technologies">
      <div className="space-y-8">
        <Marquee items={languages} />
        <Marquee items={stack} reverse />
      </div>
    </Section>
  );
}
