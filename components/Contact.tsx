import { Section } from "./Section";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-xl leading-snug">
        {site.availability}. The fastest way to reach me is email — I reply
        within a day.
      </p>

      <ul className="mt-8 space-y-3 text-sm">
        <li>
          <a
            className="text-accent underline underline-offset-4"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </li>
        <li>
          <a
            className="text-accent underline underline-offset-4"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="text-accent underline underline-offset-4"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a className="text-accent underline underline-offset-4" href={site.cv}>
            Curriculum Vitae (PDF)
          </a>
        </li>
      </ul>
    </Section>
  );
}
