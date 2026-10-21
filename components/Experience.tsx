import { Section } from "./Section";
import { experience, projects, education } from "@/lib/site";

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
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Projects
      </h3>
      <ol className="space-y-5">
        {projects.map((p) => (
          <li key={p.name} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <div className="text-xs text-muted sm:pt-1">{p.period}</div>
            <div>
              <h4 className="text-sm font-medium">{p.name}</h4>
              <p className="text-sm text-muted">{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Education - Certifications
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
