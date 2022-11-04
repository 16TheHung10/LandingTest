import React from "react";
import { TrailerWrapper } from "./styled";
import trailerImage from "../../assets/images/trailer.png";
import { useTranslation } from "react-i18next";

export default function Trailer() {
  const { t, i18n } = useTranslation();

  return (
    <TrailerWrapper className="container">
      <div className="header">
        <div className="content">
          <h3>{t("trailer")}</h3>
          <h1>Ultra X Smartphone</h1>
          <p>
            {t(
              "a-unique-smartphone-that-leads-the-mid-to-low-end-smartphone-market-with-innovative-design-and-reward-functions-and-services"
            )}
          </p>
        </div>
      </div>
      <div className="video">
        <img src={trailerImage} alt="trailer" />
      </div>
    </TrailerWrapper>
  );
}
