import React from "react";
import { TrailerWrapper } from "./styled";
import trailerImage from "../../assets/images/trailer.png";

export default function Trailer() {
  return (
    <TrailerWrapper>
      <div className="header">
        <div className="content">
          <h3>Trailer</h3>
          <h1>Ultra X Smartphone</h1>
          <p>
            A unique smartphone that leads the mid-to-low-end smartphone market
            with innovative design and reward functions and services
          </p>
        </div>
      </div>
      <div className="video">
        <img src={trailerImage} alt="trailer" />
      </div>
    </TrailerWrapper>
  );
}
