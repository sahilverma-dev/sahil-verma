"use client";

import { FC } from "react";

// lightbox library
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

interface Props {
  title: string;
  images: string[];
}

const Gallery: FC<Props> = ({ images, title }) => {
  return (
    <LightGallery
      speed={500}
      elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3"
      plugins={[lgThumbnail, lgZoom]}
      autoplay={true}
      animateThumb={true}
    >
      {images?.map((image, index) => (
        <a
          href={image}
          key={index}
          className="group relative shadow-lg aspect-video rounded-lg outline-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 rounded-lg transition-all flex items-center justify-center text-white font-bold ">
            {title}
          </div>
          <Image
            alt="hello"
            src={image}
            className="w-full h-full object-cover transition-all rounded-lg"
            loading="lazy"
            height={300}
            width={500}
          />
        </a>
      ))}
    </LightGallery>
  );
};

export default Gallery;
