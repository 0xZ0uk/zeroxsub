import type { NextPage } from "next";
import { Text } from "@nextui-org/react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Topbar from "../../components/Topbar";

const UserAdvancedSettings: NextPage = () => {
  return (
    <Layout topbar={<Topbar />}>
      <Card height="h-[80%]">
        <div className="basis-8/12 h-full border-r border-gray-200/10">
          <div className="flex space-x-8 p-12">
            <Text h2 color="primary">
              Advanced Settings
            </Text>
          </div>
        </div>
        <div className="basis-4/12 h-full p-12"></div>
      </Card>
    </Layout>
  );
};

export default UserAdvancedSettings;
