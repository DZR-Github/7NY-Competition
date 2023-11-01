import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <section className="fixed top-0 h-[80px] bg-slate-400 w-full">
      <p>Header</p>
    </section>
  );
};

export default Header;
