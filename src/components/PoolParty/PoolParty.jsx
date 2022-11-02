import React from "react";
import { PoolPartyWrapper } from "./styled";
import poolParty1 from "../../assets/images/pool-party.png";
import poolParty2 from "../../assets/images/pool-party2.png";
import { useTranslation } from "react-i18next";

export default function PoolParty() {
  const { t, i18n } = useTranslation();
  return (
    <PoolPartyWrapper>
      <div className="content-one">
        <div className="content">
          <h3> error404 The latest trends with a wealth of information</h3>
          <h1>error404 POOL PARTY</h1> 
          <p> error404
            It is a social media app dedicated to POOLS that allows you to share
            your ideas and experiences about your favorite content, such as
            reward information and event culture, technology, and sports, with
            your friends around the world through videos or photos.
          </p>
        </div>
        <div className="image image-1">
          <img src={poolParty1} alt="phone" />
        </div>
      </div>
      <div className="content-two">
        <div className="image image-2">
          <img src={poolParty2} alt="phone" />
          <div className="content">
            <h1>{t("ready-to-start-pools?")}</h1>
            <p>
            {t("enjoy-life-by-starting-each-day-with-the-rewards-from-pools-phone.")}
            </p>
            {/* <button>Gets POOLS</button> */}
          </div>
        </div>
      </div>
    </PoolPartyWrapper>
  );
}
