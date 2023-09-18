import graphQLClient from "../../graphql/graphQLClient";
import { GET_SLUGS_PRIVATE, GET_SLUGS_PUBLIC } from "../../graphql/queries";

export const GET = async () => {
  const formatDate = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const slugs: {
    slug: string;
    date: string;
  }[] = [{ slug: "", date: formatDate() }];

  const {
    pages,
  }: {
    pages: {
      slug: string;
      date_updated: string;
    }[];
  } = await graphQLClient.request(
    process.env.NODE_ENV === "production" ? GET_SLUGS_PUBLIC : GET_SLUGS_PRIVATE
  );

  pages.forEach((page) => {
    slugs.push({ slug: page.slug, date: page.date_updated.split("T")[0] });
  });

  const data = (
    domain: string,
    slugs: { slug: string; date: string }[]
  ) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${slugs
      .map((page) => {
        return `<url>
          <loc>${domain}${page.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
          <lastmod>${String(page.date)}</lastmod>
       </url>`;
      })
      .join("")}
    </urlset> `;

  return new Response(data("https://www.bygnow.dk/", slugs), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
