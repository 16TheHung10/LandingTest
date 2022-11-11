import React, { forwardRef, useRef, useState } from "react";
import { PhoneMakerWrapper } from "./styled";

function PhoneMaker() {
  return (
    <PhoneMakerWrapper className="phoneMaker">
      <div className="content">
        <div className="content_right">
          <h1 className="content_title">Be the owner of POOLS Phone Maker</h1>

            <p className="content_p">
            Join the Pools Phone NFT to take advantages of winning FREE Pools Phone and other financial benefits.
            </p>

            <button className="content_btn">Get  NFT POOLS Phone</button>
        </div>
      </div>
    </PhoneMakerWrapper>
  );
}
export default forwardRef(PhoneMaker);
