import React, { forwardRef, useRef, useState } from "react";
import { OpenMarketWrapper } from "./styled";

function OpenMarket() {
  return (
    <OpenMarketWrapper className="OpenMarket">
      <div className="content">
        <div className="content_left">
          <h1 className="content_title">POOLS Open market</h1>

          <ul>
            <li className="content_pt text_ilatic">POOLS-only online shopping mall.</li>
            <li className="content_pt text_ilatic">
              The more you use it, the more payment points you earn.
            </li>
            <li className="content_p">
              - Discount benefits at the time of payment with the acquired
              reward tokens.
            </li>

            <li className="content_p">
              - Swap the points acquired at the time of payment into coins or
              use them for payment.
            </li>
          </ul>
        </div>
      </div>
    </OpenMarketWrapper>
  );
}
export default forwardRef(OpenMarket);
