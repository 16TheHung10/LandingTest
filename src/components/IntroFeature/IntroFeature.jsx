import ZBorder from "../../assets/images/z_border.png";
import React from "react";
import { IntroFeatureWrapper } from "./styled";
import { useTranslation } from "react-i18next";

export default function IntroFeature() {
  const { t, i18n } = useTranslation();
  return (
    <IntroFeatureWrapper className="container">
      <div className="group">
        <div className="item">
          <h3>{t("decentralized-messenger")}</h3>
          <p>{t("guaranteed-diverse-rewards-and-perfect-privacy-features")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
        <div className="item">
          <h3>{t("nft-camera")}</h3>
          <p>
            {t(
              "all-images-captured-by-the-pools-camera-are-instantly-converted-to-nfts"
            )}
          </p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
      </div>

      <div className="group">
        <div className="item">
          <h3>{t("reward-music")}</h3>
          <p>{t("listen-to-music-for-free-and-mine-tokens-every-day.")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
        <div className="item">
          <h3>{t("exclusive-shopping-mall")}</h3>
          <p>{t("an-online-shopping-mall-dedicated-to-pools")} </p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <h3>{t("nft-marketplace")}</h3>
          <p>{t("nft-market-has-no-expense-burden.")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
      </div>
    </IntroFeatureWrapper>
  );
}
