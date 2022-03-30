import React from "react";
import image from "../asset/images/me(b&w).jpeg";
function Projects() {
  return (
    <div
      className=" font-bold min-w-full 
    min-h-[100vh] py-14"
    >
      <h1
        className="text-4xl
    text-center"
      >
        PROJECTS
      </h1>
      <div className="mx-10 my-8 lg:mx-40 lg:my-16 flex flex-wrap lg:flex-nowrap">
        <div
          className="text-lg font-normal text-gray-800  
     "
        >
          <h1 className="text-2xl font-bold mb-5">Project Title</h1>
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
          <button
            className="w-48 h-12 text-2xl py-1 px-2 
    border-2  font-semibold text-teal-500 border-teal-500"
          >
            Source Code
          </button>
        </div>
        <img
          src={image}
          alt="project1"
          className="
          w-48 h-48 ml-5 mt-10 md:w-56 md:h-56  lg:w-5/12 lg:h-2/5 lg:ml-20 lg:mt-10 shadow-xl  
 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Projects;
