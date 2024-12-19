import React from "react";

interface Props {
  pathname: string;
}

const Locations = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/locations" ? "border-r-4 border-primary" : ""
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
              pathname === "/locations"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
            stroke="none"
            strokeWidth={pathname === "/locations" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`transition-all ease-in-out duration-300 ${
              pathname === "/locations"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="none"
            strokeWidth={pathname === "/screens" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>Locations</h4>
        <h6 className="">Signage Displays Locations</h6>
      </div>
    </div>
  );
};

export default Locations;
