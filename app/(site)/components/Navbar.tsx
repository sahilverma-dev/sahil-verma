"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { IoMdClose as CloseIcon } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { navMenuData } from "@/constants/navMenuData";
import { child, parent } from "@/constants/variants";
import { socialMediaData } from "@/constants/socialMediaData";

const Navbar = () => {
  const pathname = usePathname();
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
          sticky ? " bg-primary-blue/70 backdrop-blur " : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl p-2 xl:p-0 flex items-center justify-between px-2 mx-auto">
          <div className="w-[160px]">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Sahil Verma"
                loading="lazy"
                width={50}
                height={50}
                className={`aspect-square shrink-0 rounded-full transition-all ${
                  sticky ? "h-11 w-11 " : "h-14 w-14"
                }`}
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-2 xl:w-1/2  items-center justify-between">
            {navMenuData.map((nav, index) => (
              <div className="flex flex-col w-full " key={index}>
                <Link
                  href={nav?.route}
                  className={`w-full py-4 px-4 transition-all  block hover:text-orange-500 text-center ${
                    pathname === nav.route ? "text-orange-500" : "text-white"
                  }`}
                >
                  {nav?.title}
                </Link>
                {pathname === nav.route && (
                  <motion.div
                    layoutId="activeMenu"
                    layout
                    className={`bg-orange-500 w-full  ${
                      sticky ? "h-0.5" : "h-1"
                    } rounded-full`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex gap-6 items-center text-xl">
            {socialMediaData?.map((social, index) => (
              <a
                key={index}
                href={social?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 orange-500 transition-all"
                title={`Follow me on ${social?.title}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
          <div className="block md:hidden">
            <button
              className="flex items-center px-3 py-2 text-white text-2xl relative z-50"
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
            className="block md:hidden h-screen w-screen fixed top-0 right-0 z-40 bg-black/50 backdrop-blur"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              //   transition: {
              //     duration: 0.5,
              //     ease: "easeInOut",
              //   },
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
            className="block md:hidden h-screen w-screen sm:w-[70%] fixed top-0 right-0 z-50 transition-all bg-primary-blue"
          >
            <motion.div
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="mt-24 flex flex-col gap-3 p-3"
            >
              {navMenuData?.map((nav) => (
                <motion.div
                  variants={child}
                  key={nav.route}
                  onClick={toggleMenu}
                  className={`relative py-6 px-6 transition-all hover:text-orange-500  ${
                    pathname === nav.route
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-white"
                  }`}
                >
                  <Link
                    href={nav?.route}
                    className={`hover:text-orange-500  ${
                      pathname === nav.route ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {nav?.title}
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

export default Navbar;
