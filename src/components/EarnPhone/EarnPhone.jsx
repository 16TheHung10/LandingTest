import React, { forwardRef, useRef, useState } from "react";
import { EarnPhoneWrapper } from "./styled";

function EarnPhone() {
  return (
    <EarnPhoneWrapper className="earnPhone">
      <div className="content">
        <div className="content_left">
          <h3 className="content_t">01. Differentiation</h3>
          <h1 className="content_title">Earn Phone</h1>
          <h3 className="content_t">Phone-to-Earn Phone</h3>
          <p className="content_pt text_ilatic">
            Turn on the DOLLAR Phone, the Rewards starts
          </p>

          <ul>
            <li className="content_p">Phone(purchase) Referral Reward</li>
            <li className="content_p">POOLS App store</li>
            <li className="content_p">- P2E Game</li>
            <li className="content_p">- App Store in decentralized rewards</li>
          </ul>
        </div>
      </div>
    </EarnPhoneWrapper>
  );
}
export default forwardRef(EarnPhone);
