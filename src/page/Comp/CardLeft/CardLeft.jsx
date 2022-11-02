import React from "react";
import { CardLeftWrapper } from "./styled";
import sliderDot from "../../../assets/images/slider-dot.png";

export default function CardLeft({ title, des }) {
  return (
    <CardLeftWrapper>
      <h1>{title}</h1>
      <p>{des}</p>
      <img src={sliderDot} alt="slider" />
    </CardLeftWrapper>
  );
}
