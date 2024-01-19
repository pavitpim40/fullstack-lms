import React from "react";
import Navbar from "./_components/navbar/navbar";
import SideBar from "./_components/sidebar/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-56">
        <Navbar />
      </div>
      <div className="fixed hidden md:inset-y-0 md:flex md:h-full md:w-56 md:flex-col">
        <SideBar />
      </div>
      <main className="h-full pt-[80px] md:pl-56">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
