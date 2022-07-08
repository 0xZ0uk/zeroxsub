import React from "react";
import { TbCameraPlus as CameraPlus } from "react-icons/tb";

interface IFileInput {
  label?: string;
}

export const ProfilePictureUpload: React.FC<IFileInput> = ({ label }) => {
  return (
    <div className="z-[100]">
      <label
        htmlFor="profile_pic"
        className="text-sm leading-3 mb-2 text-[#dedede]"
      >
        {label}
      </label>
      <div
        id="profile_pic"
        className="bg-stone-900 h-[100px] w-[100px] rounded-full flex items-center justify-center border border-gray-200/20"
      >
        <label htmlFor="profilePhoto">
          <CameraPlus size={30} color="#DEDEDE" />
        </label>
        <input
          id="profilePhoto"
          type="file"
          className="hidden"
          accept="image/*"
        ></input>
      </div>
    </div>
  );
};
