import React, { forwardRef, useRef, useState } from "react";
import { MarketplaceWrapper } from "./styled";

function Marketplace() {
  return (
    <MarketplaceWrapper className="marketplace">
      <div className="content">
        <div className="content_left">
          <h1 className="content_title">NFT Marketplace</h1>

          <ul>
            <li className="content_p">
              - NFT Market with expense burden-free.
            </li>
            <li className="content_p">- NFT freely to traded and collected.</li>
            <li className="content_p">
              - POOLS offers a more diverse NFT ecosystem
            </li>
          </ul>
        </div>
      </div>
    </MarketplaceWrapper>
  );
}
export default forwardRef(Marketplace);
