import React from "react";
import { InnovationWrapper } from "./styled";
import innovationImage from "../../assets/images/inovation.png";
import slider from "../../assets/images/slider-dot-first.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Innovation() {
  const { t, i18n } = useTranslation();
  return (
    <InnovationWrapper>
      <img src={innovationImage} alt="phone" className="image" />
      <div className="content">
        <h3>{t("design-innovation")}</h3>
        <p>
          {t(
            "impress-with-a-unique-and-sophisticated-design-that-has-never-been-seen-before."
          )}
        </p>
        <img src={slider} alt="" />
      </div>
    </InnovationWrapper>
  );
}
