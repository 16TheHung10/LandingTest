import React from "react";
import { PoolPartyWrapper } from "./styled";
import poolParty1 from "../../assets/images/pool-party.png";
import poolParty2 from "../../assets/images/pool-party2.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PoolParty() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <PoolPartyWrapper className="container">
      <div className="content-one">
        <div className="content">
          {/* <h3> error404 The latest trends with a wealth of information</h3> */}
          <h1>{t("pools-party")}</h1>
          <p>
            {t(
              "it-is-a-pools-specific-social-media-app-that-allows-you-to-share-your-ideas-and-experiences-about-your-favorite-content,-such-as-reward-information-and-event-culture,-technology,-and-sports,-with-friends-all-over-the-world-via-videos-or-photos."
            )}
          </p>
          <p>
            {t(
              'pools-party-allows-you-to-keep-up-with-the-latest-trends-by-providing-a-variety-of-information.\n\nyou-can-use-pools-party-to-organize-a-private-"party"-that-only-those-who-own-this-phone-have-the-authority-to-attend.'
            )}{" "}
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
              {t(
                "enjoy-life-by-starting-each-day-with-the-rewards-from-pools-phone."
              )}
            </p>
            {/* <button>Gets POOLS</button> */}
            {/* <button onClick={() => navigate("/#pre-order")}>
              {t("get-pools.")}
            </button> */}
          </div>
        </div>
      </div>
    </PoolPartyWrapper>
  );
}
