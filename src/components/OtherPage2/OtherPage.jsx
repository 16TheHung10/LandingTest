import React from "react";
import { Other2Wrapper } from "./styled";
import bg1 from "../../assets/images/pool-walet-bg.png";
import phone from "../../assets/images/pool-wallet.png";
import HomeLayout from "../../layouts/HomeLayout";
import { useTranslation } from "react-i18next";

export default function OtherPage2() {
  const { t, i18n } = useTranslation();
  return (
    <HomeLayout>
      <Other2Wrapper bg={bg1}>
        <img src={phone} alt="" />
        <div className="content item">
          <h2>{t("the-advantages-of-the-pools-wallet")} </h2>
          <h1>{t("pools-wallet")} </h1>
          <p>
            {t(
              "manage-digital-assets-easily,-such-as-tokens-acquired-as-rewards-from-pools."
            )}
          </p>
          <p>
            {t(
              "send-cryptocurrency-instantly-to-any-location-around-the-world-by-the-chat-window-of-the-wallet-messenger-feature."
            )}
          </p>
          <p>
            {t(
              "provide-secure-security-and-transactions-with-military-security-solutions."
            )}
          </p>
          <p>
            {t(
              "increase-profits-by-having-a-better-asset-management-system-than-financial-institutions-(staking,-lending,-mortgage-lending,..)"
            )}
          </p>
          <p>
            {t(
              "trade-cryptocurrency-in-conjunction-with-the-decentralized-pools-exchange."
            )}
          </p>
        </div>
      </Other2Wrapper>
    </HomeLayout>
  );
}
