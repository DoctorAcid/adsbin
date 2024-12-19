import React from "react";

interface Props {
  pathname: string;
}

const Approval = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/approval" ? "border-r-4 border-primary" : ""
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
              pathname === "/approval"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M7 9.98542C6.92062 9.99506 6.84049 9.99996 6.76 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H7M7 9.98542C7.28757 9.9505 7.56514 9.85339 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H7M7 9.98542V22"
            stroke="none"
            strokeWidth={pathname === "/approval" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>Approval</h4>
        <h6 className="">Manage campaigns</h6>
      </div>
    </div>
  );
};

export default Approval;