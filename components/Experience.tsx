import Link from "next/link";
import { Section } from "./Section";
import { experience, education } from "@/lib/site";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <div className="text-xs leading-relaxed text-muted sm:pt-1">
              <div>{job.period}</div>
              <div>{job.location}</div>
            </div>

            <div>
              <h3 className="font-medium">
                {job.role} · <span className="text-muted">{job.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                {job.blurb}
              </p>
              {job.caseStudy && (
                <Link
                  href={`/work/${job.caseStudy}`}
                  className="mt-2 inline-block text-sm text-accent underline underline-offset-4"
                >
                  Read the case study
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Education
      </h3>
      <ol className="space-y-5">
        {education.map((e) => (
          <li key={e.school} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <div className="text-xs text-muted sm:pt-1">{e.period}</div>
            <div>
              <h4 className="text-sm font-medium">{e.school}</h4>
              <p className="text-sm text-muted">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
