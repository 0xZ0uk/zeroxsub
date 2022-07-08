import { Textarea as NextTextarea } from "@nextui-org/react";
import React from "react";

interface ITextarea {
  label: string;
  fullWidth?: boolean;
}

const Textarea: React.FC<ITextarea> = ({ label, fullWidth }) => {
  return (
    <NextTextarea
      label={label}
      fullWidth={fullWidth}
      className="font-['Open Sans'] font-bold font-[16px] text-black"
      css={{
        $$inputColor: "#1c1c1c",
        "& div": {
          border: "1px solid rgba(222, 222, 222, 0.1);",
        },
      }}
    />
  );
};

export default Textarea;
