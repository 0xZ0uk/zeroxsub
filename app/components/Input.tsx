import { Input as NextInput } from "@nextui-org/react";
import React from "react";

interface IInput {
  label: string;
  fullWidth?: boolean;
}

const Input: React.FC<IInput> = ({ label, fullWidth }) => {
  return (
    <NextInput
      label={label}
      fullWidth={fullWidth}
      className="font-['Open Sans'] font-bold font-[16px]"
      css={{
        $$inputColor: "#1c1c1c",
        "& div": {
          border: "1px solid rgba(222, 222, 222, 0.1);",
        },
      }}
    />
  );
};

export default Input;
