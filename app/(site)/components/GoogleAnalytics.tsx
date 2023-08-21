"use client";
import Script from "next/script";
import Head from "next/head";

const GoogleAnalytics = () => {
  const GA_TRACKING_ID = "G-P1HSDDR691";

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="NZ7R4WO9a2HmjUT-KzFOrPpS3C7IpuSagFpCnjMMHHI"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
