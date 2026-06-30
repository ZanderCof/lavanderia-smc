import type { MetadataRoute } from "next";

const BASE_URL = "https://lavanderia-smc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-30");

  return [
    { url: BASE_URL, lastModified, changeFrequency: "yearly", priority: 1 },
    { url: `${BASE_URL}/chi-siamo`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/servizi`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cerimonia`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/prezzi`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
