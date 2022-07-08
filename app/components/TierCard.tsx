import React from "react";
import { Text } from "@nextui-org/react";
import Card, { ICard } from "./Card";

interface ITierCard extends ICard {
  title: string;
  price: string;
  benefits?: string[];
  subscribers?: number;
}

const TierCard: React.FC<ITierCard> = ({
  height,
  variant,
  title,
  price,
  benefits,
  subscribers = 0,
  children,
}) => {
  return (
    <Card height={height} variant={variant} className="p-8">
      <div className="flex flex-col w-full h-full items-center justify-between">
        <div className="w-full text-center py-8 flex flex-col">
          <div className="">
            <Text h3 css={{ fontWeight: 700, textTransform: "uppercase" }}>
              {title}
            </Text>
            <Text css={{ fontSize: "14px", mb: "20px" }}>
              {price} per month
            </Text>
            <div className="w-[90%] mx-auto text-center flex items-start justify-center border-t pt-8 border-emerald-500">
              {!!benefits && (
                <ul>
                  {benefits.map((ben, index) => (
                    <li key={index} className="font-['Poppins'] leading-normal">
                      {ben}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="justify-items-end text-center">
          <Text h2 color="primary">
            {subscribers}{" "}
            <span className="text-gray-200 text-sm font-['Open Sans']">
              subscribers
            </span>
          </Text>
          {children}
        </div>
      </div>
    </Card>
  );
};

export default TierCard;
