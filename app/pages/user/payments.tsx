import type { NextPage } from "next";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Radio, Text } from "@nextui-org/react";
import Topbar from "../../components/Topbar";

const UserPayments: NextPage = () => {
  return (
    <Layout topbar={<Topbar />}>
      <Card height="h-[80%]">
        <div className="basis-8/12 h-full border-r border-gray-200/10">
          <div className="flex space-x-8 my-4 px-12">
            <Text h2 color="primary">
              Payments
            </Text>
          </div>
          <div className="flex space-x-8 px-12 flex-col">
            <Radio.Group
              label="Schedule"
              defaultValue={"per-month"}
              className="text-gray-200"
            >
              <Radio
                className="mt-2"
                size="sm"
                value="per-month"
                description="Charge subscribers every month"
                css={{
                  $$inputColor: "#1c1c1c",
                }}
              >
                Per month
              </Radio>
              <Radio
                size="sm"
                value="per-creation"
                description="Charge subscriber per creation made"
                css={{
                  $$inputColor: "#1c1c1c",
                }}
              >
                Per creation
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="basis-4/12 h-full p-12"></div>
      </Card>
    </Layout>
  );
};

export default UserPayments;
