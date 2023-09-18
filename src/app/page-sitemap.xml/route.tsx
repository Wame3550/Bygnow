export const GET = async () => {
  const pages = [
    "",
    "vicevaertservice",
    "hvac-repair-pooler-ga",
    "commercial-heat",
    "radiator",
    "about-us",
  ];

  const formatDate = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const data = (
    domain: string,
    pages: Array<string>
  ) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `<url>
          <loc>${domain}${page}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
          <lastmod>${formatDate()}</lastmod>
       </url>`;
      })
      .join("")}
    </urlset> `;

  return new Response(data("https://www.hvacpoolerga.com/", pages), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
