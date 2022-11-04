import React from "react";
// import HomeLayoutOtherPage from "../../../layouts/HomeLayoutOtherPage"
import { HeroRewardMusic } from "./styled";
import backgroundRewar from "../../../assets/images/img-groud-oderpage/backgroudReward.png";
import { useTranslation } from "react-i18next";
import HomeLayout from "../../../layouts/HomeLayout";

function RewardMusic() {
  const { t, i18n } = useTranslation();
  return (
    // <HomeLayoutOtherPage>
    <HomeLayout>
      <HeroRewardMusic className="container">
        <div className="wrap_hero">
          <div className="img_left">
            <img className="img_item" src={backgroundRewar} />
          </div>

          <div className="title_right">
            <h1 className="title_item">{t("reward-music")}</h1>
            <h3 className="sub_title">{t("listen-to-music-for")}</h3>
            <p className="desc">
              {t("earn-tokens-by-listening-to-free-music")}
            </p>
          </div>
        </div>
      </HeroRewardMusic>
    </HomeLayout>

    // </HomeLayoutOtherPage>
  );
}

export default RewardMusic;
