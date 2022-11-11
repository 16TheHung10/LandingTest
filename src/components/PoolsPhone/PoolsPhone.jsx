import React, { forwardRef, useRef, useState } from "react";
import { PoolsPhoneWrapper } from "./styled";

function PoolsPhone() {
  return (
    <PoolsPhoneWrapper className="roadmap">
      <div className="content">
        <div className="content_right">
          <h1 className="content_title">The POOLS Phone</h1>

          <p className="content_p">Selling price $205</p>

          <div className="content_table">
            <div className="table_left">
              <h3 className="content_t">Spec</h3>

              <ul>
                <li className="content_p">Network</li>
                <li className="content_p">Chip</li>
                <li className="content_p">Display</li>
                <li className="content_p">Memory</li>
                <li className="content_p">Connection</li>
                <li className="content_p">Front Camera</li>
                <li className="content_p">Rear Camera</li>
                <li className="content_p">Battery</li>
                <li className="content_p">SIM Card</li>
                <li className="content_p">Sensor</li>
                <li className="content_p">OS</li>
                <li className="content_p">Size</li>
                <li className="content_p">Language</li>
                <li className="content_p">Fingerprint</li>
                <li className="content_p">FACE ID</li>
                <li className="content_p">NFC</li>
                <li className="content_p"></li>
              </ul>
            </div>

            <div className="table_right">
              <h3 className="content_t">Details</h3>

              <ul>
                <li className="content_p">3G / 4G/ 5G</li>
                <li className="content_p">Mediatek Helio G95 (12 nm)</li>
                <li className="content_p">
                  6.43” 1080 x 2400 pixels, 20:9 ratio, OLED
                </li>
                <li className="content_p">RAM 8GB + ROM 256GB</li>
                <li className="content_p">
                  Accelerometer, Gyro, Proximity, Compass
                </li>
                <li className="content_p">
                  16 MP, f/2.4, (wide), 1/3.1", 1.02µm
                </li>
                <li className="content_p">64 MP+8MP+5MP+2MP</li>
                <li className="content_p">Li-Po 5,000mAh</li>
                <li className="content_p">Duar Micro Sim+Micro SD</li>
                <li className="content_p">A. G. P/L. Sensor</li>
                <li className="content_p">Android 12</li>
                <li className="content_p">160.28*74.3*8.7 mm</li>
                <li className="content_p">Multi-language</li>
                <li className="content_p">Yes</li>
                <li className="content_p">Yes</li>
                <li className="content_p">No</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PoolsPhoneWrapper>
  );
}
export default forwardRef(PoolsPhone);
