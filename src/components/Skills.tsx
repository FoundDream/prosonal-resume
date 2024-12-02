import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skillsIcon = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaJsSquare size={140} />, label: "Javascript" },
  { icon: <FaReact size={110} />, label: "React" },
  { icon: <FaVuejs size={140} />, label: "Vue3" },
  { icon: <FaNodeJs size={140} />, label: "Node" },
  { icon: <SiTypescript size={140} />, label: "TypeScript" },
];

const Skills = () => {
  return (
    <div
      className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32"
      id="dev-stack"
    >
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-12">技术栈</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-self-center">
          {skillsIcon.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[120px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
