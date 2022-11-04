import React, { forwardRef } from "react";
import { RecapWrapper } from "./styled";
import RecapImage from "../../assets/images/recap.png";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function PreInstall(props, ref) {
  const { t, i18n } = useTranslation();
  return (
    <RecapWrapper ref={ref} className="container">
      <div className="row" id="pre-installed">
        <img src={RecapImage} alt="phone" />
        <div className="detail">
          <div className="detail_item">
            <h3>{t("pools-app-store")}</h3>
            <p>Your digital assets will be richer</p>
            <NavLink to="/pool-app-store">{`${t("read-more")} >`}</NavLink>
          </div>
          <div className="detail_item">
            <h3>POOLS Wallet</h3>
            <p>Easily manage digital assets</p>
            <NavLink to="/pool-wallet">{`${t("read-more")} >`}</NavLink>
          </div>
          <div className="detail_item">
            <h3>POOLS Card</h3>
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
export default forwardRef(PreInstall);
