import React from "react";
import { ReactComponent as TwitterIcon } from "../asset/icons/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../asset/icons/linkedin-in.svg";
import { ReactComponent as GithubIcon } from "../asset/icons/github.svg";

function Footer() {
  return (
    <div className="h-[40vh] bg-gray-800  pt-[25%] lg:pt-[10%] ">
      <div className="flex justify-center">
        <TwitterIcon className="fill-white h-10 px-12 " />
        <LinkedinIcon className="fill-white  h-10 px-12" />
        <GithubIcon className="fill-white  h-10 px-12" />
      </div>
      <div className="flex flex-col items-center">
        <hr className="text-gray-400 w-1/2 mt-7 mb-4" />
        <p className="text-gray-400">@2022 </p>
      </div>
    </div>
  );
}

export default Footer;
