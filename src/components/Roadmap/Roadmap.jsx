import React, { forwardRef, useRef, useState } from "react";
import { PartnerWrapper } from "./styled";

function Partner() {
  return (
    <PartnerWrapper className="roadmap">
      <div className="content">
        <h1 className="content_title">Roadmap</h1>

        <div className="content_card"> 
          <div className="card_item">
            <h1 className="content_t">Q3 2022</h1>

            <ul className="item_text">
              <li className="content_p">Market Research & Business Plan •</li>
              <li className="content_p">POOLS Phone Business Plan •</li>
              <li className="content_p">Platform Business Plan •</li>
              <li className="content_p">POOLS Brand Strategic Plan •</li>
              <li className="content_p">POOLS App store Plan •</li>
              <li className="content_p">POOLS Main-net Development •</li>
            </ul>
          </div>

          <div className="card_item">
            <h1 className="content_t">Q4 2022</h1>

            <ul className="item_text">
              <li className="content_p">• Platform Plan & Design</li>
              <li className="content_p">• Phone Design & Core Function Design</li>
              <li className="content_p">• POOLS Consortium Launch</li>
              <li className="content_p">• DAO Recruitment & Community Setup</li>
              <li className="content_p">• POOLS Phone NFT Issuance (10,000)</li>
              <li className="content_p">• Completion of Main-net Development/Open-beta</li>
              <li className="content_p">• Main-net Based POOLS Coin Issuance</li>
            </ul>
          </div>

          <div className="card_item">
            <h1 className="content_t">Q1 2023</h1>

            <ul className="item_text">
              <li className="content_p">POOLS Integrated Brand Launch Event •</li>
              <li className="content_p">Sequential Design for POOLS Phone •</li>
              <li className="content_p">Consortium Expansion •</li>
              <li className="content_p">Embedded System Development •</li>
              <li className="content_p">POOLS App-store Open Promotion •</li>
              <li className="content_p">Main-net-based Wallet & Integrated ID Open-Beta •</li>
              <li className="content_p">Phone Manufacturing Order •</li>
              <li className="content_p">POOLS Phone Launching Events •</li>
              <li className="content_p">1st Pre-purchase Booking & NFT sales •</li>
              <li className="content_p">Angel & VC Funding •</li>
            </ul>
          </div>

          <div className="card_item">
            <h1 className="content_t">Q2 2023</h1>

            <ul className="item_text">
              <li className="content_p">• 2nd Pre-purchase Booking & NFT sales</li>
              <li className="content_p">• POOLS Token Listing</li>
              <li className="content_p">• Completion of Embedded System Development</li>
              <li className="content_p">• Development of Dashboard for POOLS Phone</li>
              <li className="content_p">• Security of A/S Network in Major Target Countries</li>
              <li className="content_p">• Expansion of Sales & Marketing in Major Target Countries</li>
            </ul>
          </div>

          <div className="card_item">
            <h1 className="content_t">Q3 2023</h1>

            <ul className="item_text">
              <li className="content_p">Launch POOLS Phone •</li>
              <li className="content_p">NFT Buyer Product Shipment •</li>
              <li className="content_p">Shipment of Products to Waitlisters •</li>
            </ul>
          </div>
        </div>
      </div>
    </PartnerWrapper>
  );
}
export default forwardRef(Partner);
