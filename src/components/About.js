import React from "react";
import image from "../asset/images/me(b&w).jpeg";

function About() {
  return (
    <div className="bg-teal-500 font-bold min-w-full min-h-screen py-14">
      <h1 className="text-4xl text-white text-center">ABOUT ME</h1>
      <div className="mx-10 my-8 lg:mx-40 lg:my-1 flex flex-wrap lg:flex-nowrap ">
        <img
          src={image}
          alt="DarwinDJ"
          className="w-48 h-48 mr-5 mt-10 md:w-56 md:h-56  lg:w-5/12 lg:h-2/5 lg:mr-20 lg:mt-10 shadow-xl  rounded-lg"
        />
        <div className="text-white text-lg font-normal  py-14 ">
          <p className="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga
          </p>
          <p className="mb-3">
            voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Excepturi neque, ipsa animi maiores
            repellendu distinctioaperiam earum dolor voluptatum consequatur
            blanditiis inventore debitis fuga numquam voluptate{" "}
          </p>

          <p className="mb-8">
            numquamarchitecto itaque molestiae. consectetur adipisicing elit.
            amet consectetur adipisicing elit. Excepturi neque, ipsa animi
            maiores
          </p>
          <button className="w-32 h-12 text-2xl py-1 px-2 border-2  font-semibold ">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
