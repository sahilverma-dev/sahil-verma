import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => {
  const title = "Hello, I'm Sahil Verma.";
  const subtitle = "I'm a frontend developer from Himachal Pradesh India.";
  return (
    <>
      <Layout title="Home" description={`${title} - ${subtitle}`}>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
