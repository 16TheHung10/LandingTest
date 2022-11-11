import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import Image from "../../../assets/images/shopping-mall.png";
import BG from "../../../assets/images/shopping-mall.png";
import { ShoppingMallWrapper } from "./styled";
import { t } from "i18next";

export default function ShoppingMall() {
  return (
    <HomeLayout>
      <ShoppingMallWrapper className="container">
        <div className="content">
          <div className="img">
            <img src={Image} alt="" />
          </div>
          <div className="content-text">
            <div className="h1">
              <h1> {t("exclusive_shopping_mall")} </h1>
            </div>

            <p>{t("shopping-h3-2")}</p>
            <p>{t("shopping-h3-3")}</p>
            <p>{t("shopping-h3-4")}</p>
          </div>
        </div>
        <div className="footer-bg"></div>
      </ShoppingMallWrapper>
    </HomeLayout>
  );
}
