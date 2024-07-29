import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";

const MainContent = () => {
  return (
    <div className="main-content w-full min-h-[100vh] md:min-h-[220vh]">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default MainContent;
