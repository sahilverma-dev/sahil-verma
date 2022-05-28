import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

import Router from "next/router";

import NProgress from "nprogress";
import Footer from "../components/Footer";

Router.onRouteChangestart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, router }) {
  const url = `https://sahil-verma.netlify.app${router.route}`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/icon" />
      </Head>
      <DefaultSeo
        titleTemplate="Sahil Verma | %s"
        openGraph={{
          type: "website",
          locale: "en_IE",
          title: "Sahil Verma | Portfolio",
          url,
          description: "The personal website for Sahil Verma, developer.",
          site_name: "Sahil Verma | Portfolio",
        }}
        canonical={url}
      />
      <Navigation />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
