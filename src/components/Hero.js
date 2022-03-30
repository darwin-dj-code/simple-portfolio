import React from "react";

function Hero() {
  return (
    <div
      className="text-left  ml-[15%] md:ml-[20%]
     max-w-[100vw] h-[100vh] flex flex-col flex-wrap"
    >
      <div className="pt-[35%] md:pt-[18%]  mb-10">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, my name is <span className="text-teal-500">Darwin DJ</span>
        </h1>
        <br />
        <h1 className="text-5xl md:text-6xl font-bold">
          I'm the <span className="text-teal-500">React JS</span> Developer.
        </h1>
      </div>
      <button
        className="w-40 h-12 text-2xl py-1 px-2 border-2
       border-teal-500 font-bold text-teal-500"
      >
        Know more
      </button>
    </div>
  );
}

export default Hero;
