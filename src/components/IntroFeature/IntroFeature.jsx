import ZBorder from "../../assets/images/z_border.png";
import React from "react";
import { IntroFeatureWrapper } from "./styled";

export default function IntroFeature() {
  return (
    <IntroFeatureWrapper>
      <div className="group">
        <div className="item">
          <h1>Decentralized Messenger</h1>
          <p>Fully private function and fast cryptocurrency transfer</p>
          <a href="#">{"Read more >"}</a>
        </div>
        <div className="item">
          <h1>NFT Camera</h1>
          <p>Instantly generate NFTs for every photo you take</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <h1>Decentralized Messenger</h1>
          <p>Fully private function and fast cryptocurrency transfer</p>
          <a href="#">{"Read more >"}</a>
        </div>
        <div className="item">
          <h1>NFT Camera</h1>
          <p>Instantly generate NFTs for every photo you take</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <h1>NFT Marketplace</h1>
          <p>NFT Market has no expense burden day</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
    </IntroFeatureWrapper>
  );
}
