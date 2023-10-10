import "../styles/globals.css";
import { Quicksand } from "next/font/google";
import GoogleAnalytics from "../misc/GoogleAnalytics";
import Header from "../components/ui/headers/header";
import Footer from "../components/ui/footers/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da-DK">
      <GoogleAnalytics GA_MEASUREMENT_ID={"G-GFQDZ6WMW1"} />
      <body className={`${quicksand.className} bg-white bg-none`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
