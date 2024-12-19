import React from "react";

interface Props {
  pathname: string;
}

const Documentation = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-y-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/users" ? "border-r-4 border-primary" : ""
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
              pathname === "/documentation"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M9.87891 7.51884C11.0505 6.49372 12.95 6.49372 14.1215 7.51884C15.2931 8.54397 15.2931 10.206 14.1215 11.2312C13.9176 11.4096 13.6917 11.5569 13.4513 11.6733C12.7056 12.0341 12.0002 12.6716 12.0002 13.5V14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 17.25H12.0075V17.2575H12V17.25Z"
            stroke="none"
            strokeWidth={pathname === "/documentation" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>DOCUMENTATION</h4>
        <h6 className="">Find your answer</h6>
      </div>
    </div>
  );
};

export default Documentation;
