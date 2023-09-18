import { Fragment } from "react";
import Footer from "./Footer";
// import Header from './header/Index';
import Head from "next/head";
import Header from "../ui-2/sections/layout/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
