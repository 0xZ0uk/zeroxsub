import React from "react";

export interface ICard {
  className?: string;
  variant?: "filled" | "outlined";
  children?: React.ReactNode | React.ReactNode[];
  height?: string;
}

const Card: React.FC<ICard> = ({
  children,
  height,
  variant = "filled",
  className,
}) => {
  switch (variant) {
    case "outlined":
      return (
        <div
          className={
            "flex w-full min-h-fit bg-transparent border-2 border-emerald-500 rounded-md" +
            (!!height ? " ".concat(height) : "") +
            (!!className ? " ".concat(className) : "")
          }
        >
          {children}
        </div>
      );
    case "filled":
    default:
      return (
        <div
          className={
            "flex w-full min-h-fit bg-gradient-to-tr from-stone-900/70 via-stone-900/70 to-emerald-900/30 rounded-md backdrop-blur-md" +
            (!!height ? " ".concat(height) : "") +
            (!!className ? " ".concat(className) : "")
          }
        >
          {children}
        </div>
      );
  }
};

export default Card;
