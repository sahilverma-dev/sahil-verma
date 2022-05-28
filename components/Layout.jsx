import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { page } from "../constants/variants";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              url: "/images/sahil-verma.jpg",
              width: 1200,
              height: 630,
              alt: "Sahil Verma | Portfolio",
            },
          ],
        }}
      />
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={page}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
