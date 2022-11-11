import React, { forwardRef, useRef, useState } from "react";
import { SmarterWrapper } from "./styled";
import union from "../../assets/smarter/union.png";

function Smarter() {
  return (
    <SmarterWrapper className="smarter">
      <div className="content">
        <div className="content_right">
          <h3 className="content_t">02. Differentiation</h3>
          <h1 className="content_title">Consume smarter</h1>
          <p className="content_pt text_ilatic">Security First and Smart Consumption</p>

          <ul className="content_ul">
            <li className="content_p">Crypto Phone & Card</li>
            <li className="content_p">
              - POOLS ID - Biometric info based self-sovereign ID
            </li>
            <li className="content_p">
              - POOLS Wallet - Safe wallet based on POOLS Main-net
            </li>
            <li className="content_p">
              - POOLS Card & Payment - Biometric Card & Payment
            </li>
            <li className="content_p">- POOLS Open market</li>
          </ul>

          <button className="content_btn_img">
            <div className="btn_img"><img src={union} alt="img" width="100%" height="100%" /></div>

            <p className="content_t">Key creation</p>
          </button>
        </div>
      </div>
    </SmarterWrapper>
  );
}
export default forwardRef(Smarter);
