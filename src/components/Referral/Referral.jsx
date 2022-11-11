import React from "react";
import { ReferralWrapper } from "./styled";
import { useTranslation } from "react-i18next";

export default function Referral() {
  const { t, i18n } = useTranslation();

  return (
    <ReferralWrapper className="referral">
      <div className="content">
        <div className="content_center">
          <h1 className="content_title">Referral Reward</h1>
          <p className="content_p">
            The Referral Reward Pools system will generate a surprising profit
            when you refer the product to others.
          </p>

          <div className="content_card">
            <h3 className="content_t">"It doesn't get any better than that.”</h3>
          </div>
        </div>
      </div>
    </ReferralWrapper>
  );
}
