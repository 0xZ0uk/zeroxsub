import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

interface ITierEditor {}

const TierEditor: React.FC<ITierEditor> = () => {
  return (
    <>
      <div className="flex space-x-8 px-12">
        <Input label="Tier Title" fullWidth />
        <Input label="Tier Price" fullWidth />
      </div>
      <div className="flex space-x-8 mt-8 mx-12 border-b border-gray-200/50 pb-8">
        <Textarea label="Tier Description" fullWidth />
        <div className="w-full" />
      </div>
      <div className="flex space-x-8 mt-8 px-12">
        <Textarea label="Tier Benefits" fullWidth />
        <div className="w-full" />
      </div>
    </>
  );
};

export default TierEditor;
