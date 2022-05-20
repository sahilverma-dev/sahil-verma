import React from "react";
import Layout from "../components/Layout";
import { SocialMediaData } from "../constants/SocialMediaData";

const About = () => {
  return (
    <Layout title="About">
      <div className="min-h-screen flex items-center w-full max-w-6xl mx-auto">
        <div className="w-full p-2 min-h-screen">
          <div className="mt-[130px]  h-full">
            <div className="h-[600px] flex gap-3">
              <div className="bg-gray-600 hidden md:block w-[400px]">
                <img
                  src="./images/about.jpg"
                  loading="lazy"
                  alt="About me"
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 overflow-y-scroll">
                  <h1 className="text-5xl font-bold mb-5">About Me</h1>
                  <p className="mb-5">
                    Hello World! I'm Sahil Verma, a Front-End Web Developer from
                    Himacal Predesh India. From choreography on a stage to lines
                    c code on a web page, I love combining the worlds of logic
                    and creative design to make eye-catching, accessible, and
                    user friendly websites and applications.
                  </p>

                  <p className="mb-5">
                    Technology leads, society follows. The move towards
                    increasing inclusivity and diversity in the industry through
                    representation is of importance to me.
                  </p>

                  <p className="mb-5">
                    I'm excited to make the leap and continue refining my skills
                    with the right company. Drop me a line and/or your favourite
                    restaurant in Toronto in the contact form below or check me
                    o at:
                  </p>
                  <div className="flex gap-6 items-center w-full text-xl">
                    {SocialMediaData?.map((social, index) => (
                      <a
                        key={index}
                        href={social?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white transition-all hover:text-${
                          social?.hoverColor || "orange-500"
                        } hover:scale-110`}
                        title={`Follow me on ${social?.title}`}
                      >
                        {social?.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
