"use client";

import { FC } from "react";
import SectionTitle from "./SectionTitle";

import { motion } from "framer-motion";
import { parent } from "@/constants/variants";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import { Article } from "@/interfaces";

interface Props {
  articles: Article[];
}

const ArticlesSection: FC<Props> = ({ articles }) => {
  return (
    <section className="my-10 w-full max-w-7xl mx-auto">
      <SectionTitle title="Articles" />
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="flex flex-col gap-5 my-6 w-full"
      >
        {articles?.slice(0, 5).map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </motion.div>
      <div className="w-full text-center">
        <Link
          href="/articles"
          className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full  font-semibold transition-all mt-12 text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
        >
          View More Articles
        </Link>
      </div>
    </section>
  );
};

export default ArticlesSection;
