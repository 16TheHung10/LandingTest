import React, { forwardRef, useRef, useState } from "react";
import { LifestyleWrapper } from "./styled";
import img from "../../assets/lifestyle/img.png";

function Lifestyle() {
  return (
    <LifestyleWrapper className="lifestyle">
      <div className="content">
        <div className="content_bg">
          <h1 className="content_title">
            Earn more, <br/> Consume wisely, <br/> and Enjoy the True Web3.
          </h1>
        </div>

        <div className="content_content">
          <h1 className="content_title">POOLS Lifestyle </h1>

          <div className="content_text">
            <p className="content_p p_border">Lifestyle</p>
            <p className="content_p p_border">Platform</p>
            <p className="content_p p_border">Community</p>
          </div>
        </div>
      </div>
    </LifestyleWrapper>
  );
}
export default forwardRef(Lifestyle);
