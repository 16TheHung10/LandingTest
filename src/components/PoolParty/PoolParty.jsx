import React from "react";
import { PoolPartyWrapper } from "./styled";
import poolParty1 from "../../assets/images/pool-party.png";
import poolParty2 from "../../assets/images/pool-party2.png";

export default function PoolParty() {
  return (
    <PoolPartyWrapper>
      <div className="content-one">
        <div className="content">
          <h3> The latest trends with a wealth of information</h3>
          <h1>POOL PARTY</h1>
          <p>
            It is a social media app dedicated to POOLS that allows you to share
            your ideas and experiences about your favorite content, such as
            reward information and event culture, technology, and sports, with
            your friends around the world through videos or photos.
          </p>
        </div>
        <div className="image image-1">
          <img src={poolParty1} alt="phone" />
        </div>
      </div>
      <div className="content-two">
        <div className="image image-2">
          <img src={poolParty2} alt="phone" />
          <div className="content">
            <h1>Ready to start POOLS?</h1>
            <p>
              Enjoy life by starting each day with the rewards from POOLS Phone
            </p>
            {/* <button>Gets POOLS</button> */}
          </div>
        </div>
      </div>
    </PoolPartyWrapper>
  );
}
