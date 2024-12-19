import Link from "next/link";
import React from "react";

interface Props {
  pathname: string;
}

const media = ({ pathname }: Props) => {
  return (
    <Link href="/media">
      <div
        className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
          pathname === "/media" ? "border-r-4 border-primary" : ""
        } `}
      >
        {/* icon */}
        <div className="w-6 h-6 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transition-all ease-in-out duration-300 ${
                pathname === "/media"
                  ? "stroke-accent"
                  : "group-hover:stroke-primary stroke-black"
              }`}
              d="M16.5 3H19.038C20.1216 3 21 3.87842 21 4.962V7.5M16.5 3H7.5M16.5 3V7.5M16.5 21H19.038C20.1216 21 21 20.1216 21 19.038V16.5M16.5 21H7.5M16.5 21V16.5M7.5 21H4.962C3.87842 21 3 20.1216 3 19.038V16.5M7.5 21V16.5M7.5 3H4.962C3.87842 3 3 3.87842 3 4.962V7.5M7.5 3V7.5M3 7.5H7.5M3 7.5V12M7.5 7.5V12M7.5 12H3M7.5 12V16.5M7.5 12H16.5M3 12V16.5M3 16.5H7.5M16.5 16.5H21M16.5 16.5V12M21 16.5V12M16.5 12H21M16.5 12V7.5M21 12V7.5M16.5 7.5H21"
              stroke="none"
              strokeWidth={pathname === "/media" ? "2" : "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* title */}
        <div className="flex flex-col text-secondary">
          <h4>Media</h4>
          <h6 className="">Images and Videos</h6>
        </div>
      </div>
    </Link>
  );
};

export default media;
