import React, { forwardRef, useRef, useState } from "react";
import { BrandWrapper } from "./styled";

function Brand() {
  return (
    <BrandWrapper className="Brand">
      <div className="content">
        <div className="content_right">
          <h1 className="content_title">Brand story</h1>
          <p className="content_t">Core Values</p>

          <div className="content_text">
            <ul className="content_ul">
              <li className="content_li">• Decentralization</li>
              <li className="content_li">• Reward & Share</li>
              <li className="content_li">• POOLS Lifestyle</li>
              <li className="content_li">• Social Contribution & Eco-friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </BrandWrapper>
  );
}
export default forwardRef(Brand);
