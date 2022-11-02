import React from "react";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "./styled";

export default function Card({ img, des, title, className }) {
  const { t, i18n } = useTranslation();
  return (
    <CardWrapper className={className}>
      <div className="icon">
        <img src={img} alt="" />
      </div>
      <h1 className="title">{t(title)}</h1>
      <p className="des">{t(des)}</p>
    </CardWrapper>
  );
}
