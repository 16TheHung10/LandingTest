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
          <p>{t("guaranteed-diverse-rewards-and-perfect-privacy-features")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
        <div className="item">
          <h1>{t("nft-camera")}</h1>
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
          <h1>{t("reward-music")}</h1>
          <p>{t("listen-to-music-for-free-and-mine-tokens-every-day.")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
        <div className="item">
          <h1>{t("exclusive-shopping-mall")}</h1>
          <p>{t("an-online-shopping-mall-dedicated-to-pools")} </p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <h1>{t("nft-marketplace")}</h1>
          <p>{t("nft-market-has-no-expense-burden.")}</p>
          <a href="#">{`${t("read-more")} >`} </a>
        </div>
      </div>
    </IntroFeatureWrapper>
  );
}
