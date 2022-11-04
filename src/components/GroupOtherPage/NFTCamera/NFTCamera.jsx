
import { useTranslation } from "react-i18next";
import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import { HeroCamera } from "./styled";
function NFTCamera() {
  const { t, i18n } = useTranslation();
  return (

    <HomeLayout>
      <HeroCamera classname="container">
        <div className="wrap_camera">
          <div className="title_camera">
            <h1 className="title_item">NFT Camera</h1>
            <p className="derc">
              All images captured by the Pools Camera are instantly converted to
              NFTs. The newly created NFT will provide users with a great number
              of additional extended values.
            </p>
          </div>
        </div>
      </HeroCamera>
    </HomeLayout>
  );
}

export default NFTCamera;
