import React from "react";

interface LeftSidebarProps {}

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <section className="top-[80px] fixed w-[180px] h-[calc(100vh-80px)] bg-slate-300">
      <p>LeftSidebar</p>
    </section>
  );
};

export default LeftSidebar;
