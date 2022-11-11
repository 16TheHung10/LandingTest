import React, { forwardRef, useRef, useState } from "react";
import { LifestyleWrapper } from "./styled";
import img from "../../assets/lifestyle/img.png";

function Lifestyle() {
  return (
    <LifestyleWrapper className="lifestyle">
      <div className="content">
        <h1 className="content_title">POOLS Lifestyle </h1>
        <p className="content_p">Earn more, Consume wisely, and Enjoy the True Web3 in your hands.</p>

        <div className="content_text">
          <p className="content_t">Lifestyle</p>
          <p className="content_t">Platform</p>
          <p className="content_t">Community</p>
        </div>

        <div className="content_img">
            <img src={img} alt="Lifestyle" width="100%" height="100%" />
        </div>
      </div>
    </LifestyleWrapper>
  );
}
export default forwardRef(Lifestyle);
