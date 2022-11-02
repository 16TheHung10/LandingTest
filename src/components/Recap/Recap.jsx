import React from "react";
import { RecapWrapper } from "./styled";
import RecapImage from "../../assets/images/recap.png";
import { NavLink } from "react-router-dom";

export default function Recap() {
  return (
    <RecapWrapper>
      <div className="row" id="pre-installed">
        <img src={RecapImage} alt="phone" />
        <div className="detail">
          <div className="detail_item">
            <h1>POOLS App Store</h1>
            <p>Your digital assets will be richer</p>
            <NavLink to="/pool-app-store">{`Read more >`}</NavLink>
          </div>
          <div className="detail_item">
            <h1>POOLS Wallet</h1>
            <p>Easily manage digital assets</p>
            <NavLink to="/pool-wallet">{`Read more >`}</NavLink>
          </div>
          <div className="detail_item">
            <h1>POOLS Card</h1>
            <p>Pools exclusive biometric</p>
            <NavLink to="/pool-cards">{`Read more >`}</NavLink>
          </div>
        </div>
      </div>
      <div className="footer">
        <ul className="footer_group">
          <li className="footer_item">
            Non-face-to-face identity authentication
          </li>
          <li className="footer_item">
            Authentication through ID generation (connection)
          </li>
          <li className="footer_item">
            Register your fingerprint on the issued card
          </li>
          <li className="footer_item">Use of payment service</li>
        </ul>
      </div>
    </RecapWrapper>
  );
}
