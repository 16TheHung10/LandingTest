import React, { forwardRef, useRef, useState } from "react";
import { BrandWrapper } from "./styled";

function Brand() {
  return (
    <BrandWrapper className="Brand">
      <div className="content">
        <h1 className="content_title">Brand story</h1>

        <div className="content_text">
          <ul className="content_ul">
            <li className="content_t">Decentralization</li>
            <li className="content_t">Reward & Share</li>
            <li className="content_t">POOLS Lifestyle</li>
            <li className="content_t">Social Contribution & Eco-friendly</li>
          </ul>
        </div>
      </div>
    </BrandWrapper>
  );
}
export default forwardRef(Brand);
