"use client";
import Image from "next/image";
import { FC } from "react";

import { motion } from "framer-motion";

interface Props {
  _id: string;
  src: string;
  alt: string;
}

const Poster: FC<Props> = ({ _id, src, alt }) => {
  return (
    <motion.div layout layoutId={_id}>
      <Image
        src={src}
        alt={alt}
        height={400}
        width={700}
        className="object-cover rounded-md h-full w-full aspect-video"
      />
    </motion.div>
  );
};

export default Poster;
