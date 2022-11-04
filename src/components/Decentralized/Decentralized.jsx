import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import { DecentralizedWrapper } from "./styled";

export default function Decentralized() {
  return (
    <HomeLayout>
      <DecentralizedWrapper className="container">
        <div className="title">
          <h1>Decentralized Messenger</h1>
          <p>Guaranteed diverse rewards and perfect privacy features</p>
        </div>
        <div className="content">
          <div className="row">
            <div className="card">
              <p>Decentalize and Blockchain-powered</p>
            </div>
            <div className="card">
              <p>Anonymous</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p>Strong reward</p>
            </div>
            <div className="card">
              <p>Perfect security solutions</p>
            </div>
            <div className="card">
              <p>Easy-to-use Crypto Wallet features </p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p>Transfer crypto via Message</p>
            </div>
            <div className="card">
              <p>Available everywhere</p>
            </div>
          </div>
        </div>
      </DecentralizedWrapper>
    </HomeLayout>
  );
}
