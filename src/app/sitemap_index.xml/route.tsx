export const GET = async () => {
  const pages = ["page-sitemap.xml"];

  const formatDate = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const data = (domain: string) => `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `<sitemap>
          <loc>${domain}${page}</loc>
          <lastmod>${formatDate()}</lastmod>
       </sitemap>`;
      })
      .join("")}
      </sitemapindex>`;

  data("https://www.hvacpoolerga.com/");

  return new Response(data("https://www.hvacpoolerga.com/"), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
