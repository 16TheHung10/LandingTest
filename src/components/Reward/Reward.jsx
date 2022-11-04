import React from "react";
import { RewardWrapper } from "./styled";
import rewardPhone from "../../assets/images/rewardPhone.png";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { ReactComponent as WarningIcon } from "../../assets/images/icon-pre-order.svg";

export default function Reward() {
  const navigate = useNavigate();
  return (
    <RewardWrapper>
      <div className="header container">
        <div className="content">
          <h3>{t("the-world's-first-reward-smartphone")}</h3>
          <h1>Reward Smartphone</h1>
          <p>
            {t(
              "the-value-of-pools-is-that-it-makes-users'-lives-more-enjoyable-by-allowing-them-to-earn-money-and-receive-daily-rewards-as-if-they-were-mining-gold."
            )}
          </p>
          <div className="footer_info">
            <div className="prices">
              <p>100$</p>
              <button onClick={() => navigate("/#pre-order")}>
                {t("pre-order-now")}
              </button>
            </div>
            <div className="warning">
              <WarningIcon width={50} />
              <span>
                Device expected to ship in July 2023. The final purchase price
                will be $500.
              </span>
            </div>
          </div>
        </div>
      </div>
    </RewardWrapper>
  );
}
