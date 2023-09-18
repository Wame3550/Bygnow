import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.bygnow.dk/",
    sitemap: "https://www.bygnow.dk/sitemap_index.xml",
  };
}
