import { Fragment } from "react";
import graphQLClient from "../../graphql/graphQLClient";
import {
  GET_METADATA_PAGES,
  GET_SINGLE_PAGES,
  GET_SLUGS_PRIVATE,
  GET_SLUGS_PUBLIC,
} from "../../graphql/queries";
import Services from "../../components/ui/sections/Services";
import Faq from "../../components/ui/sections/Faq";
import Hero from "../../components/ui/sections/Hero";
import { ResolvingMetadata, Metadata } from "next";
import { notFound } from "next/navigation";

interface IPages {
  pages: {
    hero_button_link: string;
    hero_button_name: string;
    hero_h1: string;
    hero_h3: string;
    hero_image: {
      id: string;
      filename_download: string;
      title: string;
    };
    hero_image_height: string;
    hero_image_width: string;
    hero_paragraph: string;
    services_h2: string;
    services_paragraph: string;
    slug: string;
    services: {
      image: {
        filename_download: string;
        id: string;
        title: string;
      };
      paragraph: string;
      title: string;
    }[];
    faq: {
      question: string;
      answer: string;
    }[];
  }[];
}

interface IMetadata {
  pages: {
    meta_title: string;
    meta_description: string;
    keyword: string;
    slug: string;
  }[];
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const {
    pages,
  }: {
    pages: { slug: string }[];
  } = await graphQLClient.request(
    process.env.NODE_ENV === "production" ? GET_SLUGS_PUBLIC : GET_SLUGS_PRIVATE
  );

  return pages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const { pages }: IMetadata = await graphQLClient.request(GET_METADATA_PAGES, {
    slug,
  });

  return {
    title: pages[0].meta_title,
    description: pages[0].meta_description,
    keywords: pages[0].keyword,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: "https://www.bygnow.dk/" + pages[0].slug,
      languages: {
        "da-DK": "da-DK",
      },
    },
    openGraph: {
      title: pages[0].meta_title,
      description: pages[0].meta_description,
      url: "https://www.bygnow.dk/" + pages[0].slug,
      siteName: "Bygnow",
      locale: "da-DK",
      type: "website",
    },
    metadataBase: new URL("https://www.bygnow.dk/" + pages[0].slug),
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { pages }: IPages = await graphQLClient.request(GET_SINGLE_PAGES, {
    slug,
  });

  return (
    <Fragment>
      <Hero
        title={pages[0].hero_h1}
        paragraph={pages[0].hero_paragraph}
        image_api={pages[0].hero_image.id}
        button={{
          text: pages[0].hero_button_name,
          link: pages[0].hero_button_link,
        }}
      />
      <main className="space-y-20 mt-5">
        <Services
          title={pages[0].services_h2}
          description={false}
          footerColor={false}
          paragraph={pages[0].services_paragraph}
          services_api={pages[0].services}
          column={3}
        />
        <Faq faq={pages[0].faq} />
      </main>
    </Fragment>
  );
}
