import React from "react";
import { Other3Wrapper } from "./styled";
import fingerPrint from "../../assets/images/finger-print.png";
import creditCards from "../../assets/images/credit-cards.png";
import HomeLayout from "../../layouts/HomeLayout";
import { useTranslation } from "react-i18next";

export default function OtherPage3() {
  const { t, i18n } = useTranslation();
  return (
    <HomeLayout>
      <Other3Wrapper>
        <div className="content item">
          <h2>
            {t("pools-exclusive-biometric-\nauthenticated-payment-card")}{" "}
          </h2>
          <h1>{t("pools-card")} </h1>
          <p>ㆍ {t("non-face-to-face-identity-authentication")}</p>
          <p>ㆍ {t("authentication-via-id-generation-connection")}</p>{" "}
          <p>ㆍ {t("register-your-fingerprint-on-the-issued-card")}</p>{" "}
          <p>ㆍ {t("utilize-the-payment-service")}</p>
          <img src={fingerPrint} alt="finger-print" />
        </div>

        <div className="img">
          <img src={creditCards} alt="" />
        </div>
      </Other3Wrapper>
    </HomeLayout>
  );
}
