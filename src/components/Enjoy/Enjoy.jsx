import React, { forwardRef, useRef, useState } from "react";
import { EnjoyWrapper } from "./styled";

function Enjoy() {
  return (
    <EnjoyWrapper className="enjoy">
      <div className="content">
        <div className="content_right">
          <h3 className="content_t">03. Differentiation</h3>
          <h1 className="content_title">Enjoy the Real Web3</h1>
          <p className="content_pt text_ilatic">
            Embrace Web3 World in your hand
          </p>

          <ul className="content_ul">
            <li className="content_p">
              - Native NFT minting Camera & NFT Store
            </li>
            <li className="content_p">- POOLS Party & Web 3 App</li>
          </ul>
        </div>
      </div>
    </EnjoyWrapper>
  );
}
export default forwardRef(Enjoy);
