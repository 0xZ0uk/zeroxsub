import { Button, Checkbox } from "@nextui-org/react";
import type { NextPage } from "next";
import { TbCameraPlus as CameraPlus } from "react-icons/tb";
import Card from "../../components/Card";
import { ProfilePictureUpload } from "../../components/FileInputs";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Textarea from "../../components/Textarea";
import Topbar from "../../components/Topbar";

const UserProfile: NextPage = () => {
  return (
    <Layout topbar={<Topbar />}>
      <Card height="h-[80%]">
        <div className="basis-8/12 h-full border-r border-gray-200/10">
          <div className="w-full h-64 bg-stone-900 border-b border-gray-200/10 px-12 rounded-tl-md">
            <div className="h-full flex items-center justify-center z-[1]">
              <label
                htmlFor="coverPhoto"
                className="w-full h-full flex items-center justify-center"
              >
                <CameraPlus size={30} color="#DEDEDE" />
              </label>
              <input
                id="coverPhoto"
                type="file"
                className="hidden"
                accept="image/*"
              ></input>
            </div>
            <div className="mt-[-3rem]">
              <ProfilePictureUpload />
            </div>
          </div>
          <div className="flex space-x-8 mt-20 px-12">
            <Input label="Page Name" fullWidth />
            <Input label="What are you creating?" fullWidth />
          </div>
          <div className="flex space-x-8 mt-8 px-12">
            <Textarea label="Description" fullWidth />
            <div className="w-full" />
          </div>
          <div className="flex space-x-8 mt-8 px-12"></div>
        </div>
        <div className="basis-4/12 h-full p-12">
          <h2 className="uppercase leading-none font-black">
            Complete your <br />
            <span className="text-emerald-500">profile</span>
          </h2>
          <div className="flex flex-col">
            <Checkbox
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Set your page name
            </Checkbox>
            <Checkbox
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Tell us what you’re creating
            </Checkbox>
            <Checkbox
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Write a short description
            </Checkbox>
            <Checkbox
              defaultSelected
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Verify your email address
            </Checkbox>
            <Checkbox
              isRounded
              color="gradient"
              className="mt-2"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Upload profile picture
            </Checkbox>
            <Checkbox
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Upload cover photo
            </Checkbox>
            <Checkbox
              isRounded
              className="mt-2"
              color="gradient"
              css={{
                $$inputColor: "#1c1c1c",
              }}
            >
              Link your socials
            </Checkbox>
          </div>
          <Button color="gradient" className="mt-4 font-['Poppins']" disabled>
            Create Tiers
          </Button>
        </div>
      </Card>
    </Layout>
  );
};

export default UserProfile;
