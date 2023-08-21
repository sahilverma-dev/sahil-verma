"use client";

import { FC, useState } from "react";
import { toast } from "react-hot-toast";

// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// icons
import {
  IoClipboardOutline as CopyIcon,
  IoCheckmark as CheckIcon,
} from "react-icons/io5";

interface Props {
  name?: string;
  language: string;
  code: string;
}

const Code: FC<Props> = ({ name, code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied!");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-zinc-900 rounded-md my-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <p className="text-white px-3 text-sm font-medium">
          {name || "Example Code"}
        </p>
        <button
          className="py-2 bg-[#282c34] hover:bg-slate-500 disabled:pointer-events-none active:bg-primary-orange px-4 transition-all"
          onClick={copyToClipboard}
          disabled={copied}
        >
          {copied ? <CheckIcon color="green" /> : <CopyIcon />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "25px",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
