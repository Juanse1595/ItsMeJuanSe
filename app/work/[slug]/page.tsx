import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { site } from "@/lib/site";
import { Footer } from "@/components/Footer";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.outcome,
    openGraph: { title: study.title, description: study.outcome },
    alternates: { canonical: `${site.url}/work/${slug}/` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main id="main" className="mx-auto max-w-3xl px-6">
      <div className="py-10">
        <Link
          href="/#work"
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-accent"
        >
          ← All work
        </Link>
      </div>

      <article className="pb-16">
        <header className="border-b border-line pb-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {study.outcome}
          </p>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Role</dt>
              <dd className="mt-1">{study.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Period</dt>
              <dd className="mt-1">{study.period}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Stack</dt>
              <dd className="mt-1 font-mono text-xs leading-relaxed">
                {study.stack.join(" · ")}
              </dd>
            </div>
          </dl>
        </header>

        <div className="prose mt-12">
          <MDXRemote source={study.content} />
        </div>
      </article>

      <section className="border-t border-line py-12">
        <p className="text-lg">
          Interested in this kind of work?{" "}
          <a
            className="text-accent underline underline-offset-4"
            href={`mailto:${site.email}`}
          >
            Email me
          </a>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}
