import { socialMediaData } from "@/constants/socialMediaData";
import Image from "next/image";

const AboutMeSection = () => {
  return (
    <section className="flex items-center w-full max-w-6xl mx-auto">
      <div className="w-full p-2">
        <div className="md:mt-[130px] mt-10 h-full">
          <div className="h-[600px] flex gap-3">
            <div className="bg-gray-600 hidden md:block w-[400px]">
              <Image
                src="https://sahil-verma.vercel.app/images/about.jpg"
                loading="lazy"
                alt="About me"
                height={500}
                width={300}
                className="h-full w-full object-cover rounded"
              />
            </div>
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 overflow-y-scroll hide-scroll">
                <h1 className="text-5xl font-bold mb-5">About Me</h1>
                <p className="mb-5">
                  I&apos;m Sahil Verma, a web developer hailing from the serene
                  landscapes of Himachal Pradesh, India. With an innate
                  curiosity for technology, I&apos;ve embarked on a journey to
                  master the art of crafting digital solutions that are both
                  functional and visually compelling.
                </p>
                <p className="mb-5">
                  Starting with the foundation of HTML and CSS, I quickly
                  immersed myself in the world of web development. As I honed my
                  skills, I found a particular affinity for JavaScript, which
                  opened the doors to creating dynamic and engaging user
                  experiences. Over time, I&apos;ve embraced modern frameworks
                  like React and dabbled in backend technologies like Node.js,
                  solidifying my commitment to becoming a full-stack developer.
                </p>
                <p className="mb-5">
                  Away from the keyboard, you&apos;ll often find me exploring
                  the mountains and valleys of Himachal Pradesh, drawing
                  inspiration from nature&apos;s elegance. My goal is to
                  seamlessly blend my passion for technology with the
                  tranquility of my surroundings, crafting digital experiences
                  that leave a lasting impact.
                </p>
                <div className="flex gap-6 items-center w-full text-xl">
                  {socialMediaData?.map((social, index) => (
                    <a
                      key={index}
                      href={social?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white transition-all hover:text-${"orange-500"} hover:scale-110`}
                      title={`Follow me on ${social?.title}`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
