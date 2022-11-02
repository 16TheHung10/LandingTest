import React from "react";
import { Other2Wrapper } from "./styled";
import bg1 from "../../assets/images/pool-walet-bg.png";
import phone from "../../assets/images/pool-wallet.png";
import HomeLayout from "../../layouts/HomeLayout";

export default function OtherPage2() {
  return (
    <HomeLayout>
      <Other2Wrapper bg={bg1}>
        <img src={phone} alt="" />
        <div className="content item">
          <h2>The Advantage of the</h2>
          <h1>POOLS Wallet</h1>
          <p>
            · Manage digital assets easily, such as tokens acquired as rewards
            from POOLS.
          </p>
          <p>
            · Send cryptocurrency instantly to any location around the world by
            the chat window of the Wallet Messenger feature.
          </p>
          <p>
            · Provide secure security and transactions with military security
            solutions.
          </p>
          <p>
            · Increase profits by having a better asset management system than
            financial institutions (staking, lending, mortgage lending,..)
          </p>
          <p>
            · Trade cryptocurrency in conjunction with the decentralized pools
            exchange.
          </p>
        </div>
      </Other2Wrapper>
    </HomeLayout>
  );
}
