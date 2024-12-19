"use client";

import React, { useState } from "react";
import Image from "next/image";

const navbar = () => {
  const initialUser = [
    {
      image: "/user/user.jpg",
      name: "Jimmy van der Velde",
      title: "DHG & Partners",
    },
  ];

  const [profileDropDown, setProfileDropDown] = useState(false);

  const handleProfileDropDown = () => {
    setProfileDropDown(!profileDropDown);
  };
  return (
    <nav className="z-40 top-0 w-full fixed flex justify-between items-center pl-12 pr-2 py-2 bg-primary border-t-4 border-accent">
      {/* left section */}
      <Image width={140} height={28} alt="logo" src="/logo.svg" />

      {/* right section */}
      <div
        onClick={handleProfileDropDown}
        className={`group flex gap-6 items-center py-3 pl-4 pr-6 rounded-lg transition-all ease-in-out duration-300 cursor-pointer ${
          profileDropDown
            ? "bg-white bg-opacity-10"
            : "bg-primary hover:bg-white hover:bg-opacity-10"
        }`}
      >
        {/* user info */}
        {initialUser.map((user, i) => {
          return (
            <div key={i} className="flex gap-4 items-center">
              {/* user image */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-white border-opacity-50">
                <Image
                  width={48}
                  height={48}
                  alt="user_image"
                  src={user.image}
                />
              </div>
              {/* user name & title */}
              <div className="flex flex-col">
                <h3 className="text-white">{user.name}</h3>
                <h6 className="text-accent">{user.title}</h6>
              </div>
            </div>
          );
        })}

        {/* drop down */}
        <div className="w-4 h-4 flex items-center justify-center">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              profileDropDown ? "rotate-180" : "rotate-0"
            } transition-all ease-in-out duration-300`}
          >
            <path d="M14 0.25H0L7 7.75L14 0.25Z" fill="white" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
