import React from "react";
import { InnovationWrapper } from "./styled";
import innovationImage from "../../assets/images/inovation.png";

export default function Innovation() {
  return (
    <InnovationWrapper>
      <img src={innovationImage} alt="phone" className="image" />
      <div className="content">
        <h1>Design innovation</h1>
        <p>
          It boasts a sophisticated and unique sensibility design that has never
          been seen before.
        </p>
      </div>
    </InnovationWrapper>
  );
}
