import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Topbar from "./Topbar";

interface ILayout {
  children: React.ReactNode | React.ReactNode[];
  topbar?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, topbar }) => {
  return (
    <div className="h-[100%] w-full bg-stone-900 overflow-hidden">
      <div className="fixed h-screen w-full bg-stone-900 bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat bg-fixed opacity-50 z-[1]"></div>
      <div className="fixed h-full w-full flex z-[20] overflow-y-scroll">
        <div className="basis-1/12" />
        <div className="basis-10/12 mb-8">
          <Header />
          {topbar}
          {children}
        </div>
        <div className="basis-1/12" />
      </div>
    </div>
  );
};

export default Layout;
