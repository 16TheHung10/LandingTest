import React, { forwardRef, useRef, useState } from "react";
import { PartnerWrapper } from "./styled";

import telk from "../../assets/partner/telk.png";
import red from "../../assets/partner/red.png";
import vng from "../../assets/partner/vng.png";
import sing from "../../assets/partner/sing.png";
import eqbr from "../../assets/partner/eqbr.png";
import twinning from "../../assets/partner/twinning.png";
import sota from "../../assets/partner/sota.png";

function Partner() {
  return (
    <PartnerWrapper className="partner">
      <div className="content">
        <h1 className="content_title">Partners</h1>

        <div className="list_img">
            <div className="img_item"><img src={telk} alt="img" width="60%" /></div>
            <div className="img_item"><img src={eqbr} alt="img" width="55%"  /></div>
            <div className="img_item"><img src={twinning} alt="img" width="55%"  /></div>
            <div className="img_item"><img src={sing} alt="img" width="40%"  /></div>
            <div className="img_item"><img src={red} alt="img" width="50%"  /></div>
            <div className="img_item"><img src={vng} alt="img" width="30%"  /></div>
            <div className="img_item"><img src={sota} alt="img" width="55%"  /></div>
        </div>
      </div>
    </PartnerWrapper>
  );
}
export default forwardRef(Partner);
