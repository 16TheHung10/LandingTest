import React, { forwardRef, useRef, useState } from "react";
import { ContributionWrapper } from "./styled";

function Contribution() {
  return (
    <ContributionWrapper className="contribution">
      <div className="content">
        <div className="content_right">
          <ul>
            <li>
              <p className="content_t">Phone-To-Earn Phone</p>
              <p className="content_p">
                Earn with POOLS Phone & Enjoy the POOLS Lifestyle!!!
              </p>
            </li>

            <li>
              <p className="content_t">Reward and spread values</p>
              <p className="content_p">Be the owner of POOLS project</p>
            </li>

            <li>
              <p className="content_t">Social Contribution & Eco-friendly</p>
              <p className="content_p">Donation upon sale of phones</p>
            </li>

            <li>
              <p className="content_t">POOLS Lifestyle</p>
              <p className="content_p">Propose the POOLS Lifestyle</p>
            </li>
          </ul>
        </div>
      </div>
    </ContributionWrapper>
  );
}
export default forwardRef(Contribution);