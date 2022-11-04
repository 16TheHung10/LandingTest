import React from "react";
import { RewardWrapper } from "./styled";
import rewardPhone from "../../assets/images/rewardPhone.png";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { ReactComponent as WarningIcon } from "../../assets/images/icon-pre-order.svg";

export default function Reward() {
  const navigate = useNavigate();
  return (
    <RewardWrapper className="container">
      <div className="header container">
        <div className="content">
          <h3>{t("the-world's-first-reward-smartphone")}</h3>
          <h1>{t("reward-smartphone")}</h1>
          <p>
            {t(
              "the-value-of-pools-is-that-it-makes-users'-lives-more-enjoyable-by-allowing-them-to-earn-money-and-receive-daily-rewards-as-if-they-were-mining-gold."
            )}
          </p>
          <div className="footer_info">
            <div className="prices">
              <h1>100$</h1>
              <button onClick={() => navigate("/#pre-order")}>
                {t("pre-order-now")}
              </button>
            </div>
            <div className="warning">
              <span>{t("device-expected-to-ship-in-july-2023")}</span>
              <WarningIcon width={50} />
            </div>
          </div>
        </div>
      </div>
    </RewardWrapper>
  );
}
