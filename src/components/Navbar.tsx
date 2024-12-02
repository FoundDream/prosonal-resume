"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "关于我", path: "#about" },
  { title: "作品集", path: "#portfolio" },
  { title: "技术栈", path: "#dev-stack" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const menuVariant = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    close: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-white/70 ">
      <div className="pt-6 hidden md:flex items-center justify-center px-4 py-2 mx-auto max-w-[500px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}

          <li>
            <a href="#contact" className="group">
              <h2 className="text-lg font-bold text-white/70 cursor-pointer">
                Contact Me
              </h2>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-white/70 p-2 z-50 text-white/70"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "close"}
        variants={menuVariant}
        className="fixed left-0 top-0 w-full z-40"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
