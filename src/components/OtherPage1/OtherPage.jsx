import React from "react";
import { OtherWrapper } from "./styled";
import bg1 from "../../assets/images/something1.png";
import HomeLayout from "../../layouts/HomeLayout";

export default function OtherPage() {
  return (
    <HomeLayout>
      <OtherWrapper bg={bg1}>
        <div className="content item">
          <h2>Your digital assets will be richer</h2>
          <h1>POOLS App Store</h1>
          <p>
            Explore many platforms including Game, NFT, and Metaverse at the
            decentralized online store known as POOLS STORE to gain countless
            rewards. The number of your digital assets will increase.
          </p>
        </div>
      </OtherWrapper>
    </HomeLayout>
  );
}
