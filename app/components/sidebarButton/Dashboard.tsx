import Link from "next/link";
import React from "react";

interface Props {
  pathname: string;
}

const dashboard = ({ pathname }: Props) => {
  return (
    <Link href="/">
      <div
        className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
          pathname === "/" ? "border-r-4 border-primary" : ""
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
                pathname === "/"
                  ? "stroke-accent"
                  : "group-hover:stroke-primary stroke-black"
              }`}
              d="M2.25 12L11.2045 3.04551C11.6438 2.60617 12.3562 2.60617 12.7955 3.04551L21.75 12M4.5 9.75001V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75001M8.25 21H16.5"
              stroke="none"
              strokeWidth={pathname === "/" ? "2" : "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* title */}
        <div className="flex flex-col text-secondary">
          <h4>dashboard</h4>
          <h6 className="">Home</h6>
        </div>
      </div>
    </Link>
  );
};

export default dashboard;
