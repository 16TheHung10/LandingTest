import React, { forwardRef, useRef, useState } from "react";
import { SmartphoneWrapper } from "./styled";

function Smartphone() {
  return (
    <SmartphoneWrapper className="smartphone">
      <div className="content">
        <div className="content_left">
          <h3 className="content_t">All that 'Phone to Earn' in POOLS</h3>
          <h1 className="content_title">The world's first <br/> Phone to Earn Smartphone</h1>
          <p className="content_p">Pools' goal is for users to earn money like a fortune hunter using the POOLS Smartphone and to live an enjoyable life where rewards become a daily routine.</p>
        </div>
      </div>
    </SmartphoneWrapper>
  );
}
export default forwardRef(Smartphone);
