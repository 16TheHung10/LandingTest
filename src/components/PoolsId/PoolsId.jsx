import React, { forwardRef, useRef, useState } from "react";
import { PoolsIdWrapper } from "./styled";
import left from "../../assets/poolsId/left.png";
import right from "../../assets/poolsId/right.png";

function PoolsId() {
  return (
    <PoolsIdWrapper className="PoolsId">
      <div className="content">
        <div className="content_left">
          <div className="content_img">
            <img src={left} alt="img" width="100%" height="100%" />
          </div>

          <ul className="content_ul">
            <li className="content_li">Big data</li>
            <li className="content_li">- PLCC authentication data</li>
            <li className="content_li">- Simple Payment authentication data</li>
            <li className="content_li">
              - SSI (Self-Sovereignty Identity) authentication data
            </li>
          </ul>
        </div>

        <div className="content_right">
          <div className="content_img">
            <img src={right} alt="img" width="100%" height="100%" />
          </div>

          <div className="right_content">
            <h1 className="content_title">POOLS ID</h1>
            <h3 className="content_t">
              Biometric info based self-sovereign ID
            </h3>

            <p className="content_pt text_ilatic">
              Create “Private KEY based on biometric information” using user’s
              fingerprint information
            </p>
            <p className="content_pt text_ilatic">
              Use the genderated private key
            </p>

            <ul>
              <li className="content_p">
                ① Non-face-to-face identity authentication
              </li>
              <li className="content_p">
                ② Authentication and payment functions can be expanded through
                ID generation (connection)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PoolsIdWrapper>
  );
}
export default forwardRef(PoolsId);
