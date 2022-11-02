import React from "react";
import { CardWrapper } from "./styled";

export default function Card({ img, des, title, className }) {
  return (
    <CardWrapper className={className}>
      <div className="icon">
        <img src={img} alt="" />
      </div>
      <h1 className="title">{title}</h1>
      <p className="des">{des}</p>
    </CardWrapper>
  );
}
