"use client";
import React from "react";
import proj1 from "../../public/assets/proj1.png";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "后台管理系统",
    desc: "为陌上习承团队开发的管理系统，用于管理团队人员，项目库存等。",
    devStack: "Vue3 Pinia Element Plus Axios",
    link: "#",
    git: "#",
    src: proj1,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center">
        我的<span className="text-orange-400">项目</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex mt-12${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "md:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg  text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl  text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href="{project.link}" className="mr-6">
                  Link
                </a>
                <a href="{project.git}">Git</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-auto object-cover rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
