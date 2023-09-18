export interface CustomHeadProps {
  title: string;
  description: string;
  robots: string;
  googlebot: string;
  path?: string;
  image?: string;
  type?: string;
  publishedAt?: string;
  modifiedAt?: string;
  faq?: { heading: string; description: string }[];
}

export async function generateMetadata({
  title,
  description,
  robots,
  googlebot,
  path,
  image,
  type,
  publishedAt,
  modifiedAt,
  faq,
}: {
  title: string;
  description: string;
  robots: string;
  googlebot: string;
  path?: string;
  image?: string;
  type?: string;
  publishedAt?: string;
  modifiedAt?: string;
  faq?: { heading: string; description: string }[];
}) {
  return {
    title: { title },
    description: { description },
    alternates: {
      canonical:
        path == undefined
          ? "https://www.bygnow.dk"
          : "https://www.bygnow.dk/" + path,
    },
  };
}
