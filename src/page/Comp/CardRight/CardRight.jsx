import React from "react";
import { CardRightWrapper } from "./styled";
export default function CardRight({ title1, title2, des1, des2, alignLeft }) {
  return (
    <CardRightWrapper align={alignLeft}>
      <div className="section-one">
        <h1>{title1}</h1>
        <p>{des1}</p>
        <button>{"Read more >"}</button>
      </div>
      <div className="section-two">
        <h1>{title2}</h1>
        <p>{des2}</p>
      </div>
    </CardRightWrapper>
  );
}
