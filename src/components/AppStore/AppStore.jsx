import React, { forwardRef, useRef, useState } from "react";
import { AppStoreWrapper } from "./styled";

function AppStore() {
  return (
    <AppStoreWrapper className="appStore">
      <div className="content">
        <div className="content_left">
          <h3 className="content_t">Your digital assets will be more valuable than ever.</h3>
          <h1 className="content_title">POOLS App Store</h1>
          <p className="content_p">Explore many platforms including GameFi, NFT, and Metaverse at the decentralized online store known as POOLS STORE to gain countless rewards.</p>
        </div>
      </div>
    </AppStoreWrapper>
  );
}
export default forwardRef(AppStore);
