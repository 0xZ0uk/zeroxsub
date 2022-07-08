import React from "react";

interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  return (
    <div className="w-full min-h-24 h-24 flex justify-between items-center bg-stone-900"></div>
  );
};

export default Footer;
