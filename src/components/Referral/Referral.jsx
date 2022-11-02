import React from "react";
import { ReferralWrapper } from "./styled";
import Card1 from "../../assets/images/referal-card-1.png";
import Card2 from "../../assets/images/referal-card-2.png";
import Card3 from "../../assets/images/referal-card-3.png";
import Card4 from "../../assets/images/referal-card-4.png";
import Card from "./Card/Card";
// const mockCardContent = [
//   {
//     img: img1,
//     title: "Sustainable Revenue",
//     des: "POOLS is the world's first reward-only phone created by the WEB3 mobile revolution and becomes the best tool for sustainable revenue generation",
//   },
//   {
//     img: img2,
//     title: "POOLS Society",
//     des: "Become a part of the POOLS ecosystem now and Build mobile experiences that have never been possible before",
//   },
//   {
//     img: img3,
//     title: "Decentralized Exchange",
//     des: "Users can easily swap or trade rewarded tokens at any time on the decentralized exchange 'POOLS’. Furthermore, digital assets can be easily used by staking and participating in the DAO.",
//   },
//   {
//     img: img4,
//     title: "Decentralized Messenger",
//     des: "Guaranteed diverse rewards and perfect privacy features. Strong rewards, anonymous, decentralized and Blockchain-powered, easy to use features, transfer crypto via message, available anywhere, perfect security. ",
//   },
// ];
export default function Referral() {
  return (
    <ReferralWrapper>
      <div className="header">
        <h3>“It doesn't get any better than this”</h3>
        <h1>Referral Reward</h1>
        <p>
          Full Spawn's referral reward system provides an amazing amount of
          profit to the recommender.
        </p>
      </div>
      <div className="cards">
        <div className="img-group">
          <div className="img">
            <img src={Card1} alt="referral" />
          </div>
          <div className="img">
            <img src={Card2} alt="referral" />
          </div>
        </div>
        <div className="img-group">
          {" "}
          <div className="img">
            <img src={Card3} alt="referral" />
          </div>
          <div className="img">
            <img src={Card4} alt="referral" />
          </div>
        </div>
      </div>
    </ReferralWrapper>
  );
}
