import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import Image from "../../../assets/images/market-place.png";
import BG from "../../../assets/images/shopping-mall.png";
import { MarketPlaceWrapper } from "./styled";

export default function MarketPlace() {
  return (
    <HomeLayout>
      <MarketPlaceWrapper className="container">
        <div className="content">
          <div className="img">
            <img src={Image} alt="" />
          </div>
          <div className="content-text">
            <div className="h1">
              <h1>NFT Marketplace </h1>
            </div>
            <p>
              Users can easily swap or trade rewarded tokens at any time on the
              decentralized exchange 'Pools’. Furthermore, digital assets can be
              easily used by staking and participating in the DAO.
            </p>
          </div>
        </div>
      </MarketPlaceWrapper>
    </HomeLayout>
  );
}
