import React, { forwardRef, useRef, useState } from "react";
import { DonationWrapper } from "./styled";

function Donation() {
  return (
    <DonationWrapper className="donation">
      <div className="content">
        <div className="content_left">
          <h3 className="content_t">Donate to Save the Planet Earth</h3>
          <h1 className="content_title">Donation for every phone sold </h1>
        </div>
      </div>
    </DonationWrapper>
  );
}
export default forwardRef(Donation);
