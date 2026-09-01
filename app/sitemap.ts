import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, priority: 1 },
    ...getCaseStudies().map((s) => ({
      url: `${site.url}/work/${s.slug}/`,
      priority: 0.8,
    })),
  ];
}
