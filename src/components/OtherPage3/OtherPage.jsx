import React from "react";
import { Other3Wrapper } from "./styled";
import fingerPrint from "../../assets/images/finger-print.png";
import creditCards from "../../assets/images/credit-cards.png";
import HomeLayout from "../../layouts/HomeLayout";

export default function OtherPage3() {
  return (
    <HomeLayout>
      <Other3Wrapper>
        <div className="content item">
          <h2>Exclusive Biometric Authenticated</h2>
          <h1>POOLS Card</h1>
          <p>ㆍ Non-face-to-face identity authentication</p>
          <p>ㆍ Authentication via ID generation (connection)</p>{" "}
          <p>ㆍ Register your fingerprint on the issued card</p>{" "}
          <p>ㆍ Utilize the payment service</p>
          <img src={fingerPrint} alt="finger-print" />
        </div>

        <div className="img">
          <img src={creditCards} alt="" />
        </div>
      </Other3Wrapper>
    </HomeLayout>
  );
}
