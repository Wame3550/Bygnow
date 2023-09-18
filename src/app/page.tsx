import Services from "../components/ui/sections/Services";
import { Fragment } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Faq from "../components/ui/sections/Faq";
import Choose from "../components/ui/sections/Choose";
import Hero from "../components/ui/sections/Hero";

const title = "Bygnow | Find Din Lokale Håndværkere Hos Os";
const description =
  "Bygnow hjælper dig med at finde en håndværker til at udføre dine håndværksopgaver ved at tilbyde dig 3 gratis tilbud fra håndværkere i dit lokale område.";
const keywords = ["hvac pooler ga"];
const url = "https://www.bygnow.dk";

export const metadata = {
  title: title,
  description: description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: keywords,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: "HVAC Pooler GA",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <Fragment>
      <Hero
        title={"Søger du tilbud på håndværkere og fagfolk?"}
        paragraph={
          "Vi hjælper dig med at finde den rette håndværke eller fagfolk til at udføre dine opgaver, så du undgår at bruge tid og penge."
        }
        image_local="professional-repairman-with-casing-wrench-during-inspection-repair-faucet-kitchen-plumbing-repairing-with-wrench-with-tool-belt-when-repairing-faucet-kitchen.jpg"
        button={{ text: "Find håndværkere", link: "tel:+18442040938" }}
      />
      <main className="space-y-16 mt-10 mb-20">
        <Services
          title={"Brancher"}
          description={false}
          footerColor={false}
          paragraph={""}
          services_local={[
            {
              title: "Viceværtservice",
              image: "sweeping.svg",
              link: "/vicevaertservice",
            },
            {
              title: "Gulvservice",
              image: "floor.svg",
              link: "/gulvservice",
            },
            {
              title: "Glarmester",
              image: "glass.svg",
              link: "/glarmester",
            },
          ]}
          column={3}
        />
      </main>
    </Fragment>
  );
}
