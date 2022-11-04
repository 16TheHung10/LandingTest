import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FeatureWrapper } from "./styled";

export default function Feature() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <FeatureWrapper className="container">
      <div className="content-top">
        <h4 style={{ textTransform: "uppercase" }}>{t("the-future-of")}</h4>
        <div className="title">
          {t("smartphone")
            .split("")
            .map((item, index) => {
              return <span>{item}</span>;
            })}
        </div>
        {/* <h1 className="title">{t("smartphone")}</h1> */}
        <div className="description">
          {/* <h4>{t("best-performance,-modern")} </h4> */}
          {/* <p>- {t("feature-des-1")}</p>
          <p>- {t("feature-des-2")}</p>
          <p>- {t("feature-des-3")}</p> */}
          {/* <p>A transformative system and model.</p>
          <p>An unprecedented leap in battery life.</p>
          <p>
            A mind-blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do.
          </p> */}
          {/* <button onClick={() => navigate("/#pre-order")}>
            {t("learn-more")}{" "}
          </button> */}
        </div>
      </div>
      <div className="layer"></div>
    </FeatureWrapper>
  );
}
