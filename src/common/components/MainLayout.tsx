import React from "react";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      {/* .container.my-5>h1.text-5xl.bg-primary-500.text-white.p-5{Witaj w ZUS} */}
      <NavBar />
      <div className="container my-5 grid gap-5">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
