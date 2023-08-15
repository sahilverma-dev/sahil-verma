"use client";

import { motion } from "framer-motion";

const TopProgressBar = () => {
  return (
    <div className="loader fixed top-0 left-0 w-full z-50">
      <motion.div
        className="bg-primary-orange h-1"
        initial={{ width: 0 }}
        animate={{ width: "95%" }}
        exit={{ width: "100%" }}
      />
    </div>
  );
};

export default TopProgressBar;
