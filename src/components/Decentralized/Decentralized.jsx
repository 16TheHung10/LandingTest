import { t } from "i18next";
import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import { DecentralizedWrapper } from "./styled";

export default function Decentralized() {
  return (
    <HomeLayout>
      <DecentralizedWrapper className="container">
        <div className="title">
          <h1>{t("decentralized_messenger")}</h1>
          <p>{t("guaranteed_diverse_rewards_and_perfect_privacy_features")}</p>
        </div>
        <div className="content">
          <div className="row">
            <div className="card">
              <p>{t("Decentralized_and_Blockchain-powered")}</p>
            </div>
            <div className="card">
              <p>{t("Anonymous")}</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p>{t("Strong_rewards")}</p>
            </div>
            <div className="card">
              <p>{t("perfect-security-solution")}</p>
            </div>
            <div className="card">
              <p>{t("easy-to-use-crypto-wallet-features")}</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p>{t("transfer-crypto-via-message")}</p>
            </div>
            <div className="card">
              <p>{t("available-everywhere")}</p>
            </div>
          </div>
        </div>
      </DecentralizedWrapper>
    </HomeLayout>
  );
}
