import React from "react";
import SlidingText from "./SlidingText";

const About = () => {
  return (
    <section className="w-full relative">
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          src="/logo.jpg"
          className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full -mt-14 md:-mt-20 z-[9]"
          alt=""
        />
        <div className="flex flex-col items-center justify-center max-w-2xl mt-12 md:mt-0">
          <h1 className="text-center text-white text-5xl font-bold">
            UKYO INU
          </h1>
          <h1 className="text-center text-white text-2xl font-bold mt-3">
            Neiro's Brother
          </h1>
          <p className="text-center text-white mt-12 text-lg font-semibold tracking-wider">
            Welcome to the world of $UKYO. Standing side by side with Neiro,
            Ukyo's legacy will also be immortalized and live on in the cypto
            world
          </p>
        </div>
      </div>

      <SlidingText />
    </section>
  );
};

export default About;
