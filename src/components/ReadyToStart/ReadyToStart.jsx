import React from "react";
import { ReadyToParty } from "./styled";
import poolParty2 from "../../assets/images/pool-party2.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PoolParty() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <ReadyToParty className="ready_to_party">
      <div className="content">
          <div className="content_text">
            <h1 className="content_title">Ready to start POOLS?</h1>

            <p className="content_p">
            Enjoy life by beginning each day with POOLS Phone rewards.
            </p>

            <button className="content_btn" onClick={() => navigate("/#pre-order")}>
            Get POOLS
            </button>
          </div>
      </div>
    </ReadyToParty>
  );
}
