"use client";

import { urlForImage } from "@/sanity/lib/image";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FC } from "react";
import { PortableTextBlock } from "sanity";
import Link from "next/link";
import Code from "./Code";
import YoutubeEmbed from "./YoutubeEmbed";

interface Props {
  content: PortableTextBlock[];
}

const Content: FC<Props> = ({ content }) => (
  <PortableText
    value={content}
    components={{
      types: {
        image: ({ value }: any) => (
          <>
            <a
              href={urlForImage(value)?.url()}
              target="_blank"
              className="relative block rounded-md overflow-hidden w-full h-96 m-4 mx-auto"
            >
              <Image
                className="object-contain"
                src={urlForImage(value)?.url()}
                alt="Article Image"
                fill
              />
            </a>
            {value?.caption?.length > 0 && (
              <p className="text-zinc-00 text-center w-full text-xs mb-6">
                {value?.caption}
              </p>
            )}
          </>
        ),

        code: ({ value }: any) => (
          <Code language={value?.language} code={value?.code} />
        ),
        youtube: ({ value }: any) => (
          <YoutubeEmbed url={value?.url} />
          // <div>{JSON.stringify(value, null, 2)}</div>
        ),
      },

      list: {
        bullet: ({ children }: any) => (
          <ul className="ml-5 mb-3 list-disc marker:text-white space-y-5">
            {children}
          </ul>
        ),
        number: ({ children }: any) => (
          <ol className="ml-5 list-decimal ">{children}</ol>
        ),
      },
      block: {
        h1: ({ children }: any) => (
          <h1 className="text-3xl font-bold my-4">{children}</h1>
        ),
        h2: ({ children }: any) => (
          <h2 className="text-2xl mb-3 font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
          <h3 className="text-lg mb-3 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
          <h4 className="text-base mb-3 font-bold">{children}</h4>
        ),
        normal: ({ children }: any) => <p className="mb-3">{children}</p>,
        blockquote: ({ children }: any) => (
          <blockquote className="border-l-primary-orange border-l-4 pl-5 my-5">
            {children}
          </blockquote>
        ),
      },
      marks: {
        link: ({ children, value }: any) => {
          const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;

          return (
            <Link
              href={value.href}
              rel={rel}
              className="underline decoration-primary-orange hover:decoration-black"
            >
              {children}
            </Link>
          );
        },
      },
    }}
  />
);

export default Content;
