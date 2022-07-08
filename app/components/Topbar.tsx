import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface ITopbar {}

const TopbarLink = (props: any) => {
  const router = useRouter();

  const pathname = router.pathname;
  const isActive = () => {
    return props.href === pathname;
  };

  return (
    <li
      className={"w-fit font-['Open Sans'] cursor-pointer".concat(
        isActive() ? " font-bold text-emerald-500" : ""
      )}
    >
      <NextLink href={props.href}>
        <Link color={isActive() ? "primary" : "text"}>{props.children}</Link>
      </NextLink>
    </li>
  );
};

const Topbar: React.FC<ITopbar> = () => {
  return (
    <div className="w-full flex justify-between mt-10 mb-5">
      <ul className="flex m-0 space-x-8">
        <TopbarLink href="/user/profile">Profile</TopbarLink>
        <TopbarLink href="/user/tiers">Tiers</TopbarLink>
        <TopbarLink href="/user/payments">Payments</TopbarLink>
        <TopbarLink href="/user/advanced">Advanced Settings</TopbarLink>
      </ul>
      <div className="flex m-0 space-x-8 items-center">
        <Button
          bordered
          size="sm"
          rounded="true"
          color="gradient"
          css={{ background: "transparent", border: "2px solid #DEDEDE" }}
        >
          Preview
        </Button>
        <Button
          size="sm"
          rounded="true"
          color="gradient"
          css={{ color: "#1C1C1C", fontWeight: 900 }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
