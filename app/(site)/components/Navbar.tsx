"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, Fragment } from "react";
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
        className={`fixed top-0 left-0 w-full z-[60] transition-all ${
          sticky
            ? " md:bg-primary-blue/70 backdrop-blur "
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl p-2 xl:p-0 flex items-center justify-between px-2 mx-auto">
          <div className="w-[160px]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
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
          <button
            className="flex md:hidden items-center px-3 py-2 text-white text-2xl"
            onClick={toggleMenu}
          >
            {menuOpen ? <CloseIcon fill="#fff" path="#fff" /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
            className="fixed inset-0 z-30 bg-primary-blue/70 backdrop-blur md:hidden h-screen w-full"
          >
            <motion.div
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`w-full flex flex-col gap-3 p-3 ${
                sticky ? "mt-16" : "mt-24"
              }`}
            >
              {navMenuData.map((item, index) => (
                <Fragment key={index}>
                  <motion.div
                    variants={child}
                    layout
                    className="w-full transition-all"
                  >
                    <Link
                      href={item.route}
                      onClick={() => setMenuOpen(false)}
                      className={`w-full py-3 block transition-all ${
                        pathname === item.route
                          ? "text-primary-orange"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                  <AnimatePresence mode="wait">
                    {pathname === item.route && (
                      <motion.div
                        layoutId="activeMenu2"
                        variants={child}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        className={`bg-orange-500  ${
                          sticky ? "h-0.5" : "h-1"
                        } rounded-full`}
                      />
                    )}
                  </AnimatePresence>
                </Fragment>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
