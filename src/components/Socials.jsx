import React from "react";
import tele from "/socials/tele.png";
import x from "/socials/x.png";
import dextool from "/socials/dextool.png";
import dexscreener from "/socials/dexscreener.png";
import twitter from "/socials/twitter.png";

const Socials = () => {
  const socialLinks = [
    {
      img: tele,
      url: "",
    },
    {
      img: x,
      url: "",
    },
    {
      img: dextool,
      url: "",
    },
    {
      img: dexscreener,
      url: "",
    },
    {
      img: twitter,
      url: "",
    },
  ];
  return (
    <div className="w-full mb-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-5 mt-10 ">
        <h1 className="text-center text-4xl md:text-7xl font-bold text-blue-500">
          Please Visit Us
        </h1>
        <div className="flex items-center justify-center gap-2 md:gap-5 mt-12 px-5">
          {socialLinks.map((item, index) => (
            <a href="" className=" bg-blue-500 p-3 rounded-full">
              <img
                src={item.img}
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
