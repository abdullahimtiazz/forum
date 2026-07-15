import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aiforyounglawyers.com/sitemap.xml",
    host: "https://aiforyounglawyers.com",
  };
}
