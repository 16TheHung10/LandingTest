import React from "react";
import preOrder from "../../assets/images/pre-order.png";
import { PreOrderWrapper } from "./styled";
import { ReactComponent as WarningIcon } from "../../assets/images/icon-pre-order.svg";
export default function PreOrder() {
  return (
    <PreOrderWrapper>
      <div className="left" id="pre-order">
        <div className="content">
          <h2>Pre-order today for $100</h2>
          <h1>Join the Waitlist</h1>
          <p>
            To reserve your spot on the waitlist, enter your information,
            connect your wallet and make a $100 USDC refundable deposit. Once
            payment is complete, you'll be added to the waitlist and be notified
            once it's time to complete your order Getting on the waitlist for
            Saga requires a $100 USDC deposit. The deposit mount will be
            deducted from the final purchase price of the Poolsphone.
          </p>
        </div>
        <form className="form">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Country" />
          <button>Pre-order Now</button>
        </form>
        <div className="short_des">
          <WarningIcon width={50} />
          <span>
            Device expected to ship in July 2023 Final purchase price will be
            $800
          </span>
        </div>
      </div>
      {/* <div className="right">
        <img src={preOrder} alt="" />
      </div> */}
    </PreOrderWrapper>
  );
}
