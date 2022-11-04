import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import Image from "../../../assets/images/shopping-mall.png";
import BG from "../../../assets/images/shopping-mall.png";
import { ShoppingMallWrapper } from "./styled";

export default function ShoppingMall() {
  return (
    <HomeLayout>
      <ShoppingMallWrapper className="container">
        <div className="content">
          <div className="img">
            <img src={Image} alt="" />
          </div>
          <div className="content-text">
            <div className="h1">
              <h1>Exclusive </h1>
              <h1>Shopping mall</h1>
            </div>
            <p>
              An online shopping mall dedicated to Pools. The more you use it,
              the more payment points you accumulate. ㆍDiscount benefits at the
              time of payment with the acquired reward tokens. ㆍSwap the points
              acquired at the time of payment into coins or use them for
              payment.
            </p>
          </div>
        </div>
        <div className="footer-bg"></div>
      </ShoppingMallWrapper>
    </HomeLayout>
  );
}
