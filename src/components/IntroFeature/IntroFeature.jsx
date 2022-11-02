import ZBorder from "../../assets/images/z_border.png";
import React from "react";
import { IntroFeatureWrapper } from "./styled";
import { useTranslation } from "react-i18next";

export default function IntroFeature() {
  const { t, i18n } = useTranslation();
  return (
    <IntroFeatureWrapper>
      <div className="group">
        <div className="item">
          <h1>{t("decentralized-messenger")}</h1>
          <p>erro404 Fully private function and fast cryptocurrency transfer</p>
          <a href="#">{"Read more >"}</a>
        </div>
        <div className="item">
          <h1>{t("nft-camera")}</h1>
          <p>error404 Instantly generate NFTs for every photo you take</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <h1>{t("decentralized-messenger")}</h1>
          <p>error404 Fully private function and fast cryptocurrency transfer</p>
          <a href="#">{"Read more >"}</a>
        </div>
        <div className="item"> 
          <h1>{t("nft-camera")}</h1>
          <p>error404 Instantly generate NFTs for every photo you take</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
      <div className="group">
        <div className="item"> 
          <h1>{t("nft-marketplace")}</h1>
          <p> error404NFT Market has no expense burden day</p>
          <a href="#">{"Read more >"}</a>
        </div>
      </div>
    </IntroFeatureWrapper>
  );
}
