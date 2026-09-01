import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "./Section";
import { getProse } from "@/lib/content";

export function HowIWork() {
  return (
    <Section id="how-i-work" title="How I work">
      <div className="prose max-w-2xl">
        <MDXRemote source={getProse("how-i-work")} />
      </div>
    </Section>
  );
}
