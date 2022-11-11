import React, { forwardRef, useRef, useState } from "react";
import { CardPaymentWrapper } from "./styled";
import finger from "../../assets/cardPayment/img_finger.png";
import list from "../../assets/cardPayment/img_list.png";
import card from "../../assets/cardPayment/img_card.png";

function CardPayment() {
  return (
    <CardPaymentWrapper className="cardPayment">
      <div className="content">
        <h3 className="content_t">Biometric Card & Payment</h3>

        <h1 className="content_title">POOLS Card & Payment</h1>

        <div className="content_card">
          <div className="card_item">
            <div className="item_img">
              <img src={finger} alt="img" width="100%" height="100%" />
            </div>

            <ul className="content_ul">
              <li className="content_p">
                - Biometric security authentication (POOLS Wallet linkage)
              </li>
              <li className="content_p">
                - Identification using biometric data (POOLS Phone & Wallet ID
                integrated)
              </li>
              <li className="content_p">
                - ID Authentication (Non-Blockchain, Blockchain ”DID, KYC,
                Self-Sovereign”)
              </li>
            </ul>
          </div>

          <div className="card_item">
            <div className="item_img">
              <img src={list} alt="img" width="100%" height="100%" />
            </div>

            <ul className="content_ul">
              <li className="content_p">
                - Convenient payment service (Same as Apple Pay and Samsung Pay){" "}
              </li>
              <li className="content_p">
                - Standard credit cards (EMV, etc.) can be loaded at the same
                time
              </li>
              <li className="content_p">
                - QR-based mobile payment service can be installed
              </li>
              <li className="content_p">
                - POOLS ID-based payment service, cryptocurrency payment service
              </li>
            </ul>
          </div>

          <div className="card_item">
            <div className="item_img">
              <img src={card} alt="img" width="100%" height="100%" />
            </div>

            <ul className="content_ul">
              <li className="content_p">- POOLS-ID Authentication feature </li>
              <li className="content_p">- KYC, DID function</li>
              <li className="content_p">- Key pare function</li>
              <li className="content_p">- OTP function</li>
            </ul>
          </div>
        </div>
      </div>
    </CardPaymentWrapper>
  );
}
export default forwardRef(CardPayment);
