import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.hvacpoolerga.com/",
    sitemap: "https://www.hvacpoolerga.com/sitemap_index.xml",
  };
}
