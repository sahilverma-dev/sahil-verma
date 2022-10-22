import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NavData } from "../constants/NavData";
import { SocialMediaData } from "../constants/SocialMediaData";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { IoMdClose as CloseIcon } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";
import { child, menuItem, menuList, parent } from "../constants/variants";

const Navigation = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    // console.log(router);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          sticky
            ? " bg-primary/70 backdrop-blur "
            : "bg-transparent md:py-6 py-2"
        }`}
      >
        <div className="max-w-7xl p-2 xl:p-0 flex items-center justify-between px-2 mx-auto">
          <div className="w-[160px]">
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  alt="Sahil Verma"
                  loading="lazy"
                  className={`aspect-square shrink-0 rounded-full transition-all ${
                    sticky ? "h-11 w-11 " : "h-14 w-14"
                  }`}
                />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex gap-2 xl:w-1/2 overflow-x-scroll hide-scroll items-center justify-between">
            {NavData.map((nav, index) => (
              <Link key={index} href={nav?.route}>
                <a
                  className={`py-6 px-6 transition-all hover:text-orange-500  ${
                    router.pathname == nav?.route
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-white"
                  }`}
                >
                  {nav?.title}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-6 items-center text-xl">
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
          <div className="block md:hidden">
            <button
              className="flex items-center px-3 py-2 text-white text-2xl"
              onClick={toggleMenu}
            >
              {menuOpen ? <CloseIcon fill="#fff" path="#fff" /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="block md:hidden h-screen w-screen fixed top-0 right-0 z-10 bg-black/50 backdrop-blur"
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              x: 100,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="block md:hidden h-screen w-screen sm:w-[70%] fixed top-0 right-0 z-10 transition-all bg-primary"
          >
            <motion.div
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="mt-24 flex flex-col gap-3 p-3"
            >
              {NavData?.map((nav, index) => (
                <motion.div
                  variants={child}
                  key={index}
                  onClick={toggleMenu}
                  className={`py-6 px-6 transition-all hover:text-orange-500  ${
                    router.pathname == nav?.route
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-white"
                  }`}
                >
                  <Link href={nav?.route}>
                    <a
                      className={`hover:text-orange-500  ${
                        router.pathname == nav?.route
                          ? "text-orange-500"
                          : "text-white"
                      }`}
                    >
                      {nav?.title}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Navigation;
