import { Text } from "@nextui-org/react";
import type { NextPage } from "next";
import React from "react";
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import TierEditor from "../../../components/TierEditor";
import Topbar from "../../../components/Topbar";

const UserTierEdit: NextPage = ({ slug = "" }: any) => {
  return (
    <Layout topbar={<Topbar />}>
      <Card height="h-[80%]">
        <div className="basis-8/12 h-full border-r border-gray-200/10">
          <div className="flex space-x-8 py-8 px-12">
            <Text h2 color="primary">
              Edit Tier
            </Text>
          </div>
          <TierEditor />
        </div>
        <div className="basis-4/12 h-full p-12"></div>
      </Card>
    </Layout>
  );
};

export default UserTierEdit;
