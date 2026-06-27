import type { MetadataRoute } from "next";

const BASE_URL = "https://lavanderia-smc.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "yearly" as const, priority: 1 },
    { path: "/chi-siamo", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/servizi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/cerimonia", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/prezzi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
