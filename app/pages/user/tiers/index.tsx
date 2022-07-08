import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import TierCard from "../../../components/TierCard";
import Topbar from "../../../components/Topbar";

const UserTiers: NextPage = () => {
  return (
    <Layout topbar={<Topbar />}>
      <Card height="h-[80%]" className="p-8 space-x-8">
        <div className="basis-1/12" />
        <div className="basis-10/12 flex flex-col justify-center">
          <div className="w-full h-fit flex justify-between items-center mb-10">
            <div>
              <h2 className="uppercase font-bold font-['Poppins'] leading-none text-emerald-500">
                Tiers
              </h2>
              <p className="font-['Open Sans']">
                Choose what to give your subscribers
              </p>
            </div>
            <Link href="/user/tiers/new">
              <Button
                color="primary"
                css={{
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                }}
              >
                New Tier
              </Button>
            </Link>
          </div>

          <div className="w-full flex space-x-8">
            <TierCard
              variant="outlined"
              height="h-[520px]"
              title="Basic Tier"
              price="€5"
              benefits={["Early access to content"]}
              subscribers={52}
            >
              <Link href={"/user/tiers/" + "basic"}>
                <Button css={{ fontWeight: 700, fontFamily: "Poppins" }}>
                  Edit
                </Button>
              </Link>
            </TierCard>
            <TierCard
              variant="outlined"
              height="h-[520px]"
              title="Plus Tier"
              price="€10"
              benefits={["Early access to content", "Patron-only voting power"]}
              subscribers={39}
            >
              <Link href={"/user/tiers/" + "plus"}>
                <Button css={{ fontWeight: 700, fontFamily: "Poppins" }}>
                  Edit
                </Button>
              </Link>
            </TierCard>
            <TierCard
              variant="outlined"
              height="h-[520px]"
              title="Premium Tier"
              price="€15"
              benefits={[
                "Early access to content",
                "Patron-only voting power",
                "Patron-only posts and messages",
              ]}
              subscribers={8}
            >
              <Link href={"/user/tiers/" + "premium"}>
                <Button css={{ fontWeight: 700, fontFamily: "Poppins" }}>
                  Edit
                </Button>
              </Link>
            </TierCard>
          </div>
        </div>
        <div className="basis-1/12" />
      </Card>
    </Layout>
  );
};

export default UserTiers;
