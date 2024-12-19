import React from "react";

interface Props {
  pathname: string;
}

const Statistics = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/statistics" ? "border-r-4 border-primary" : ""
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
              pathname === "/statistics"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M22 7L13.5 15.5L8.5 10.5L2 17M22 7H16M22 7V13"
            stroke="none"
            strokeWidth={pathname === "/statistics" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>STATISTICS</h4>
        <h6 className="">Performance</h6>
      </div>
    </div>
  );
};

export default Statistics;
