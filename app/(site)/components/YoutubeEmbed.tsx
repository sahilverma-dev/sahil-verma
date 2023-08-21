import { getYoutubeVideoID } from "@/utils";
import { FC } from "react";
interface Props {
  url: string;
}

const YoutubeEmbed: FC<Props> = ({ url }) => {
  const src = `https://www.youtube.com/embed/${getYoutubeVideoID(url)}`;
  return (
    <iframe
      src={src}
      className="w-full aspect-video rounded-md mb-3 overflow-hidden"
    />
  );
};

export default YoutubeEmbed;
