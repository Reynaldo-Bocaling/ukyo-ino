import React from "react";

const Header = () => {
  return (
    <div className="py-5 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/logo.jpg"
            className="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <h1 className="text-xl text-white font-bold">UKYO INU</h1>
        </div>
        <button className="text-lg text-blue-500 font-bold bg-white rounded-full py-3 px-10 shadow-xl shadow-blue-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Header;
