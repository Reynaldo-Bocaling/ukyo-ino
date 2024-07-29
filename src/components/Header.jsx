import React from "react";

const Header = () => {
  return (
    <div className="py-5 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/logo.jpg"
            className="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <h1 className="title-font text-lg md:text-xl text-white font-bold title-font ">
            UKYO INU
          </h1>
        </div>
        <button className="title-font text-base md:text-lg text-blue-500 font-bold bg-white rounded-full py-3 px-10 shadow-lg shadow-blue-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Header;
