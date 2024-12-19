import React from "react";

interface Props {
  pathname: string;
}

const campaigns = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/campaigns" ? "border-r-4 border-primary" : ""
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
              pathname === "/campaigns"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M16 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H16M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 20.1 3.9 21 5 21H8M12 2V4M12 8V10M12 14V16M12 20V22"
            stroke="none"
            strokeWidth={pathname === "/champaigns" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>Campaigns</h4>
        <h6 className="">Create and Manage</h6>
      </div>
    </div>
  );
};

export default campaigns;
