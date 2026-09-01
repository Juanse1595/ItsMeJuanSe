import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content", "work");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  /** One-line outcome for the homepage card. Not a tech-tag soup. */
  outcome: string;
  role: string;
  period: string;
  stack: string[];
  /** Lower sorts first on the homepage. */
  order: number;
  /** Set false to keep a draft out of the build. */
  published: boolean;
};

export type CaseStudy = CaseStudyMeta & { content: string };

function parse(fileName: string): CaseStudy {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(WORK_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    outcome: data.outcome ?? "",
    role: data.role ?? "",
    period: data.period ?? "",
    stack: data.stack ?? [],
    order: data.order ?? 99,
    published: data.published ?? true,
    content,
  };
}

export function getCaseStudies(): CaseStudy[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parse)
    .filter((s) => s.published)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((s) => s.slug === slug);
}

/** Reads a standalone prose file from content/, e.g. "how-i-work". */
export function getProse(name: string): string {
  return fs.readFileSync(path.join(process.cwd(), "content", `${name}.mdx`), "utf8");
}
