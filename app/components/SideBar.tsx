"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Dashboard from "./sidebarButton/Dashboard";
import Media from "./sidebarButton/Media";
import Campaigns from "./sidebarButton/Campaigns";
import Approval from "./sidebarButton/Approval";
import Screens from "./sidebarButton/Screens";
import Billing from "./sidebarButton/Billing";
import Statistics from "./sidebarButton/Statistics";
import Users from "./sidebarButton/Users";
import Settings from "./sidebarButton/Settings";
import Documentation from "./sidebarButton/Documentation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed flex flex-col pt-[92px] justify-between w-full max-w-[320px] h-full border-[1px] border-lightGray">
      {/* top section */}
      <div className="flex flex-col">
        <Dashboard pathname={pathname} />
        <Media pathname={pathname} />
        <Campaigns pathname={pathname} />
        <Approval pathname={pathname} />
        <Screens pathname={pathname} />
        <Billing pathname={pathname} />
        <Statistics pathname={pathname} />
        <Users pathname={pathname} />
        <Settings pathname={pathname} />
      </div>

      {/* bottom section */}

      <div className="flex flex-col">
        <Documentation pathname={pathname} />
        <div className="text-end text-black px-4 py-2">
          <h6>Version 0.2.1.223</h6>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
