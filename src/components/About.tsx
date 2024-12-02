import Image from "next/image";
import React from "react";
import book from "../../public/assets/book.png";
import card from "../../public/assets/card.png";
import finance from "../../public/assets/finance.png";
import pc from "../../public/assets/pc.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h2 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 text-center">
        关于<span className="text-orange-400">我</span>
      </h2>
      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="h-[130px] w-auto" />
            <div className="flex flex-col m-4">
              <h2 className="text-2xl font-bold text-white/80">学校经历</h2>
              <p className="text-lg text-white/70 mt-2">
                我是一名就读于中央民族大学的大二学生，攻读光电信息科学与工程专业，校内成绩优异，曾获专业奖学金。
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="card" className="h-[130px]  w-auto" />
            <div className="flex flex-col m-4">
              <h2 className="text-2xl font-bold text-white/80">证书</h2>
              <p className="text-lg text-white/70 mt-2">
                CET-4 594分 CET-6 507分 互联网+竞赛省三
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="h-[130px] w-auto" />
            <div className="flex flex-col m-4">
              <h2 className="text-2xl font-bold text-white/80">实习经历</h2>
              <p className="text-lg text-white/70">@泰康在线 @美团</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="finance" className="h-[130px] w-auto" />
            <div className="flex flex-col m-4">
              <h2 className="text-2xl font-bold text-white/80">个人评价</h2>
              <p className="text-lg text-white/70 mt-2">
                热爱学习，热爱生活，不断追求创新、探索新技术
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
