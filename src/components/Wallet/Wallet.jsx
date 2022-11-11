import React, { forwardRef, useRef, useState } from "react";
import { WalletWrapper } from "./styled";

function Wallet() {
  return (
    <WalletWrapper className="wallet">
      <div className="content">
        <div className="content_right">
          <div className="content_text">
            <h3 className="content_t">Offering you a variety of advantages</h3>
            <h1 className="content_title">POOLS Wallet</h1>

            <ul>
              <li className="content_p">
                - Manage digital assets such as tokens obtained as Pool rewards
                with ease.
              </li>
              <li className="content_p">
                - Quickly send cryptocurrency anywhere in the world using the
                wallet messengers' chat window.
              </li>
              <li className="content_p">
                - Provides confidence and transactions with military security
                solutions.
              </li>
              <li className="content_p">
                - Enhanced asset management system (staking, lending, secured
                loan, etc.) than the financial sector can generate additional
                profits.
              </li>
              <li className="content_p">
                - Various cryptocurrencies can be traded in conjunction with the
                decentralized pools exchange.
              </li>
            </ul>
          </div>

          <div className="content_card">
            <div className="card_item_odd">
              <div className="item_bg bg_1">
                <p> Digital Asset Management</p>
              </div>
            </div>

            <div className="card_item"></div>

            <div className="card_item_odd">
              <div className="item_bg bg_3">
                <p>Digital Asset Operation</p>
              </div>
            </div>

            <div className="card_item"></div>

            <div className="card_item"></div>

            <div className="card_item_odd">
              <div className="item_bg bg_2">
                <p>Digital Asset Transmission</p>
              </div>
            </div>

            <div className="card_item"></div>

            <div className="card_item_odd">
              <div className="item_bg bg_4">
                <p>Digital Asset Trading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WalletWrapper>
  );
}
export default forwardRef(Wallet);
