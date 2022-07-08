import { Text, Input, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  const user = undefined;

  return (
    <div className="w-full h-24 flex justify-between items-center">
      <div className="basis-6/12 flex items-center">
        <Link href={!!user ? "/dashboard" : "/"}>
          <h3 className="font-black text-emerald-500 cursor-pointer">0xSUB</h3>
        </Link>
      </div>
      <div className="basis-6/12 flex justify-end items-center space-x-4">
        <Input
          placeholder="Search for creator..."
          type="search"
          className="font-normal font-['Poppins']"
          contentRight={<FaSearch color="#DEDEDE" />}
        />
        {!!user && (
          <Avatar
            text="0x"
            color="gradient"
            textColor="secondary"
            style={{ fontFamily: "Poppins", fontWeight: 900 }}
          />
        )}
        {!user && (
          <Button
            color="gradient"
            style={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
