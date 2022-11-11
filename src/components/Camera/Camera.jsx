import React, { forwardRef, useRef, useState } from "react";
import { CameraWrapper } from "./styled";

function Camera() {
  return (
    <CameraWrapper className="camera">
      <div className="content">
        <div className="content_left">
          <h1 className="content_title">NFT Camera</h1>

          <ul>
            <li className="content_p">
              All images captured by the POOLS Camera are converted to NFTs in
              real time.
            </li>
            <li className="content_p">
              Users will have access to a large number of additional extended
              values using the newly developed NFT.
            </li>
          </ul>
        </div>
      </div>
    </CameraWrapper>
  );
}
export default forwardRef(Camera);
