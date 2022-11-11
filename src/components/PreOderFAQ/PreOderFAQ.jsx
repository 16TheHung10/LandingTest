import React from "react";
import { Hero } from "./styled";
import { useTranslation } from "react-i18next";
import HomeLayout from "../../layouts/HomeLayout";
import { Collapse } from "antd";
import "antd/dist/antd.css";

function PreOderFAQ() {
  const { t, i18n } = useTranslation();
  const { Panel } = Collapse;
  const text = `Users must fill out the website's registration form with their information and 
  wait until the following notification regarding phone release and final payment to receive the phone.`;
  const text1 = `For the purpose of reserving their waitlist, buyers must deposit $100 USDC.`;
  const text2 = `Pools Phone are sold globally. The shipping fee will be fluctuate depended on 
  the distance and included in the final payment.`;
  const text3 = `Pools Phone is expected to be shipped in July 2023.`;
  const text4 = `Yes. Pools Phone was created on the Android platform, therefore it has all of 
  the features that are available.`;
  const text5 = `No, you don’t have to. Every POOLS Phone NFT holder get a free POOLS Phone upon 
  release, regardless of the NFT card tier.`;
  return (
    <HomeLayout>
      <Hero className="container">
        <h1 className="title">Pre-order FAQ</h1>
        <Collapse accordion>
          <Panel header="How to be placed on the Pools Phone Waitlist?" key="1">
            <p>{text}</p>
          </Panel>
          <Panel
            header="How much money must customers deposit to be placed on the waitlist?"
            key="2"
          >
            <p>{text1}</p>
          </Panel>
          <Panel
            header="In which countries can Pools Phone be distributed?"
            key="3"
          >
            <p>{text2}</p>
          </Panel>
          <Panel header="When is Pools Phone released?" key="4">
            <p>{text3}</p>
          </Panel>
          <Panel
            header="Will Pools Phone have Google Play Store installed?"
            key="5"
          >
            <p>{text4}</p>
          </Panel>
          <Panel
            header="Do I need to deposit after drawing and buying NFT on Pools Phone NFT Roulette?"
            key="6"
          >
            <p>{text5}</p>
          </Panel>
        </Collapse>
      </Hero>
    </HomeLayout>
  );
}

export default PreOderFAQ;
