"use client";

import React from "react";
import { motion } from "framer-motion";
import { page } from "@/constants/variants";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={page}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
