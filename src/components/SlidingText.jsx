import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full border-b-[1px] border-[#80e924] mt-9 pt-4 pb-6 overflow-hidden absolute -top-5">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p key={i} className="mx-10 text-green-100 text-lg font-bold">
            BUY $UKYO INU
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
