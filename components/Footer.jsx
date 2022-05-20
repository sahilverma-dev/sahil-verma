import Link from "next/link";
import { SocialMediaData } from "../constants/SocialMediaData";
import { AiOutlineCopyrightCircle as CopyIcon } from "react-icons/ai";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full bg-primary">
      <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="md:w-[337px]">
          <Link href="/">
            <a>
              <img
                src="/images/logo-1.png"
                alt=""
                loading="lazy"
                className="h-16"
              />
            </a>
          </Link>
        </div>
        <div className="flex gap-6 items-center text-xl">
          {SocialMediaData?.map((social, index) => (
            <a
              key={index}
              href={social?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
              title={`Follow me on ${social?.title}`}
            >
              {social?.icon}
            </a>
          ))}
        </div>
        <div className="md:text-sm text-xs w-full md:w-auto text-center">
          <CopyIcon className="inline-flex" /> Copyright {date?.getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/sahil-verma-970b9920a/"
            // 1="noopener noreferrer"
            rel="noreferrer"
            target="_blank"
            className="font-semibold text-orange-500"
          >
            Sahil Verma
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
