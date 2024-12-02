"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cursor from "../../public/assets/icon1.png";
import lighting from "../../public/assets/icon2.png";

const Hero = () => {
  return (
    <div className="h-[100vh] py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000000,#2B1942_35%,#8F5C55_60%,#DBAF76_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[600px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center mb-12">
          <h2 className="text-[#98B4CE]">Hello, I&apos;m</h2>
          <h2 className="text-[#E48A57]">Ziwen</h2>
        </div>
        <motion.div
          className="hidden md:block absolute left-[280px] top-[140px]"
          drag
        >
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            draggable="false"
            className=""
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute right-[220px] top-[20px]"
          drag
        >
          <Image
            src={lighting}
            height="120"
            width="120"
            alt="message"
            draggable="false"
            className=""
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users
        </p>

        {/* <Image
          src={profileic}
          alt="profile picuture"
          className="h-auto
           w-auto mx-auto "
        /> */}
      </div>
    </div>
  );
};

export default Hero;
