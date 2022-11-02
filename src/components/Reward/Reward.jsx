import React from "react";
import { RewardWrapper } from "./styled";
import rewardPhone from "../../assets/images/rewardPhone.png";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

export default function Reward() {
  const navigate = useNavigate();
  return (
    <RewardWrapper>
      <div className="header">
        <div className="content">
          <p>{t("the-world's-first-reward-smartphone")}</p>
          <h1>Reward Smartphone</h1>
          <p>
            {t(
              "the-value-of-pools-is-that-it-makes-users'-lives-more-enjoyable-by-allowing-them-to-earn-money-and-receive-daily-rewards-as-if-they-were-mining-gold."
            )}
          </p>
        </div>
      </div>
      <div className="content-bottom">
        <img src={rewardPhone} alt="phone" />
        <div className="detail">
          <div className="body detail_item">
            <h1>Body</h1>
            <hr />
            <p>
              {t(
                "163.3-x-77.9-x-8.9-mm-(6.43-x-3.07-x-0.35-in)-\n228-g-/-229-g-(mmwave)-(8.04-oz)-\n\nglass-front-(gorilla-glass-victus+),-glass-back-(gorilla-glass-victus+)-\nsingle-sim-(nano-sim)-or-dual-sim-(2-nano-sims-+-esim,-dual-stand-by)-\n\nip68-dust/water-resistant-(up-to-1.5m-for-30-mins)-\n\narmor-aluminum-frame-with-tougher-drop-and-scratch-resistance-(advertised)-\nstylus,-2.8ms-latency-(bluetooth-integration,-accelerometer,-gyro)"
              )}
            </p>
            {/* <p>
              Glass front (Gorilla Glass Victus+), glass back (Gorilla Glass
              Victus+) Single SIM (Nano-SIM) or Dual SIM (2 Nano-SIMs + eSIM,
              dual stand-by)
            </p>
            <p>IP68 dust/water resistant (up to 1.5m for 30 mins)</p>
            <p>IP68 dust/water resistant (up to 1.5m for 30 mins)</p> */}
          </div>
          <div className="body detail_item">
            <h1>Display</h1>
            <hr />
            <p>
              {t(
                "dynamic-amoled-2x,-120hz,-hdr10+,-1750-nits-(peak)-\n\nsize-6.8-inches,-114.7-cm2-(~90.2%-screen-to-body-ratio)-1440-x-3088-pixels-(~500-ppi-density)-\n\ncorning-gorilla-glass-victus+-always-on-display"
              )}{" "}
            </p>
            {/* <p>IP68 dust/water resistant (up to 1.5m for 30 mins)</p>
            <p>
              Size 6.8 inches, 114.7 cm2 (~90.2% screen-to-body ratio) 1440 x
              3088 pixels (~500 ppi density){" "}
            </p>
            <p>Corning Gorilla Glass Victus+ Always-on display</p> */}
          </div>
          <div className="body detail_item">
            <h1>Camera</h1>
            <hr />
            <p>{t('198-mp,-f/1.8,-23mm-(wide),-1/1.33",-0.8µm,-pdaf')}</p>
          </div>
          <div className="prices">
            <p>100$</p>
            <button onClick={() => navigate("/#pre-order")}>
              {t("pre-order-now")}
            </button>
          </div>
        </div>
      </div>
    </RewardWrapper>
  );
}
