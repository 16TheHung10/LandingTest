import React from "react";
import { RecapWrapper } from "./styled";
import RecapImage from "../../assets/images/recap.png";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Recap() {
  const { t, i18n } = useTranslation();
  return (
    <RecapWrapper>
      <div className="row" id="pre-installed">
        <img src={RecapImage} alt="phone" />
        <div className="detail">
          <div className="detail_item">
            <h1>{t("pools-app-store")}</h1>
            <p>Your digital assets will be richer</p>
            <NavLink to="/pool-app-store">{`${t("read-more")} >`}</NavLink>
          </div>
          <div className="detail_item">
            <h1>POOLS Wallet</h1>
            <p>Easily manage digital assets</p>
            <NavLink to="/pool-wallet">{`${t("read-more")} >`}</NavLink>
          </div>
          <div className="detail_item">
            <h1>POOLS Card</h1>
            <p>Pools exclusive biometric</p>
            <NavLink to="/pool-cards">{`${t("read-more")} >`}</NavLink>
          </div>
        </div>
      </div>
      <div className="footer">
        <ul className="footer_group">
          <li className="footer_item">
            {t("non-face-to-face-identity-authentication")}
          </li>
          <li className="footer_item">
            {t("authentication-via-id-generation-connection")}
          </li>
          <li className="footer_item">
            {t("register-your-fingerprint-on-the-issued-card")}
          </li>
          <li className="footer_item">{t("utilize-the-payment-service")} </li>
        </ul>
      </div>
    </RecapWrapper>
  );
}
