"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/interfaces";
import { formatDate } from "@/utils";
import { motion } from "framer-motion";

interface Props {
  article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <Link
      href={`/article/${article?.slug}`}
      className="flex flex-col md:flex-row gap-4 text-white mb-5 md:mb-0"
    >
      <motion.div
        layout
        layoutId={article._id}
        className="relative w-full md:w-[452px] flex-shrink-0 overflow-hidden aspect-video rounded-lg"
      >
        <div className="overlay" />
        <Image
          alt={article?.title}
          src={article?.poster}
          width={452}
          height={268}
          className="object-cover h-full w-full"
        />
      </motion.div>
      <div className="w-full">
        <div className="flex align-center mb-4 font-spacegrotesk font-medium">
          <div className="text-gray-300 uppercase">
            {formatDate(article?._createdAt)}
          </div>
        </div>
        <h2 className="font-bold text-2xl md:text-4xl mb-3 md:mb-7 font-spacegrotesk truncate w-full">
          {article?.title}
        </h2>
        <p className="text-gray-300 mg-bottom-0">{article?.description}</p>
        <div className="divider  bg-neutral-600" />
      </div>
    </Link>
  );
};

export default ArticleCard;
