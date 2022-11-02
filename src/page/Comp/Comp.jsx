import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import CardLeft from "./CardLeft/CardLeft";
import CardRight from "./CardRight/CardRight";
import { CompWrapper } from "./styled";
const contentLeft = [
  {
    title: "Design innovation",
    des: "It boasts a sophisticated and unique sensibility design that has never been seen before.",
  },
  {
    title: "Reward platform",
    des: "Equipped with various reward functions and reward platforms",
  },
  {
    title: "Crypto wallet",
    des: "You can use stable wallets and exchanges in a perfect security environment",
  },
  {
    title: "Biometric payment",
    des: "A biometric authentication-based POOLS-only payment card is paid to all POOLS buyers.",
  },
];
const contentRight = [
  {
    title1: "Decentralized Messenger",
    des1: "Fully private function and fast cryptocurrency transfer",
    title2: "Decentralized Exchange",
    des2: "Users can easily swap or trade rewarded tokens at any time on the decentralized exchange 'POOLS’. Furthermore, digital assets can be easily used by staking and participating in the DAO.",
  },
  {
    title1: "NFT Camera",
    des1: "Instantly generate NFTs for every photo you take",
    title2: "NFT Camera",
    des2: "All images captured by the POOLS Camera are instantly converted to NFTs. The newly created NFT will provide users with a great number of additional extended values.",
  },
  {
    title1: "Reward Music",
    des1: "Listen to music for free and mine tokens every day",
    title2: "Reward music",
    des2: "Earn tokens by listening to free music from all genres all over the world via radio streaming. Furthermore, users can earn even larger rewards by winning the Daily Airdrop Big Event, which occurs every day.",
  },
  {
    title1: "Exclusive Shopping mall",
    des1: "An online shopping mall dedicated to Pools",
    title2: "Exclusive Shopping mall",
    des2: "An online shopping mall dedicated to POOLS. The more you use it, the more payment points you accumulate. Discount benefits at the time of payment with the acquired reward tokens. Swap the points acquired at the time of payment into coins or use them for payment.",
  },
  {
    title1: "NFT Marketplace",
    des1: "NFT Market has no expense burden day",
    title2: "NFT Marketplace",
    des2: "NFT Market has no expense burden. You can freely trade NFT and collect NFT for free. POOLS offers a more diverse NFT ecosystem.",
  },
];
export default function Comp() {
  return (
    <HomeLayout>
      <CompWrapper>
        <button className="learn_more">Learn more</button>
        <div className="content">
          <div className="content-left">
            {contentLeft.map((item, index) => {
              return <CardLeft key={index} title={item.title} des={item.des} />;
            })}
          </div>
          <div className="content-right">
            {contentRight.map((item, index) => {
              const { title1, title2, des1, des2 } = item;
              return (
                <CardRight
                  key={index}
                  alignLeft={index % 2 !== 0 && "left"}
                  title1={title1}
                  title2={title2}
                  des1={des1}
                  des2={des2}
                />
              );
            })}
          </div>
        </div>
      </CompWrapper>
    </HomeLayout>
  );
}
