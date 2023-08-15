"use client";

import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed h-screen w-full inset-0 z-50 bg-primary-blue/70 backdrop-blur flex items-center justify-center">
      <svg
        width="161"
        height="162"
        viewBox="0 0 161 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.ellipse
          cx="80.5"
          cy="81"
          rx="80.5"
          ry="81"
          fill="#E95000"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M26 51H140L128 69H77.1473C72.1473 71 71.1473 75.8491 77.1473 78.8491L121 79L83.0003 135L62.0003 105H84.5003C89 101.5 89 98.5 84.5003 95H56.0003L26 51Z"
          fill="white"
          initial={{ strokeDasharray: "0 1", opacity: 0 }}
          animate={{ strokeDasharray: "1 0", opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  );
};

export default Preloader;
