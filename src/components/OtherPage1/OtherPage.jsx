import React from "react";
import { OtherWrapper } from "./styled";
import bg1 from "../../assets/images/something1.png";
import HomeLayout from "../../layouts/HomeLayout";
import { useTranslation } from "react-i18next";

export default function OtherPage() {
  const { t, i18n } = useTranslation();
  return (
    <HomeLayout>
      <OtherWrapper bg={bg1}>
        <div className="content item">
          {/* <h2>Your digital assets will be richer</h2> */}
          <h1>{t("pools-app-store")} </h1>
          <p>
            {t(
              "explore-many-platforms-including-game,-nft,-and-metaverse-at-the-decentralized-online-store-known-as-pools-store-to-gain-countless-rewards.-the-number-of-your-digital-assets-will-increase."
            )}
          </p>
        </div>
      </OtherWrapper>
    </HomeLayout>
  );
}
