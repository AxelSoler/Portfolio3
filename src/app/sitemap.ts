import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://axelsoler.dev/",
      lastModified: new Date("2026-07-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
