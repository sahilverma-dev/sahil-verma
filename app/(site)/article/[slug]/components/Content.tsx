"use client";

import { PortableText } from "@portabletext/react";
import { FC } from "react";
import { PortableTextBlock } from "sanity";

interface Props {
  content: PortableTextBlock[];
}

const Content: FC<Props> = ({ content }) => {
  return <PortableText value={content} />;
};

export default Content;
