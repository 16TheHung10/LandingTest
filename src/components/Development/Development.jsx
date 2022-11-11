import React, { forwardRef, useRef, useState } from "react";
import { DevelopmentWrapper } from "./styled";

function Development() {
  return (
    <DevelopmentWrapper className="development">
      <div className="content">
        <div className="content_left">
          <h3 className="content_t">04. Differentiation</h3>
          <h1 className="content_title">
            Development support for Web3 ecosystems
          </h1>
          <p className="content_pt text_ilatic">
            Integrated support for development, release, marketing, and funding
          </p>

          <ul>
            <li className="content_p">- POOLS Mainnet</li>
            <li className="content_p">- Web3 Stack & Open SDK</li>
            <li className="content_p">
              - POOLS App Store: Free registration and low prices
            </li>
            <li className="content_p">
              - POOLS Ecosystem Fund - Startup Incubator & Launchpad
            </li>
          </ul>
        </div>
      </div>
    </DevelopmentWrapper>
  );
}
export default forwardRef(Development);
