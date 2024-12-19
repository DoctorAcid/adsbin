import React from "react";

interface Props {
  pathname: string;
}

const Billing = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/billing" ? "border-r-4 border-primary" : ""
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
              pathname === "/billing"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6M12 2V22"
            stroke="none"
            strokeWidth={pathname === "/billings" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>BILLING</h4>
        <h6 className="">Payment information</h6>
      </div>
    </div>
  );
};

export default Billing;
