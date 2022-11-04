import React from "react";
import { SecurityWrapper } from "./styled";
import image from "../../assets/images/security_section_img2.png";
import { useTranslation } from "react-i18next";

export default function SecuritySolutions() {
  const { t, i18n } = useTranslation();
  return (
    <SecurityWrapper className="container">
      <div className="content">
        <h3>{t("secure-digital-financial-transactions")}</h3>
        <h1>{t("mobile-device-security-solutions")}</h1>
        <p>
          {t(
            "pools-protects-users-from-real-time-cyber-threats-such-as-downloaded-apps,-phishing-messages,-phishing-email-viruses,-and-malware.-it-also-prevents-applications-from-compromising-users'-security-and-privacy."
          )}
        </p>
      </div>
      <div className="image">
        <img src={image} alt="phone" style={{}} />
      </div>
    </SecurityWrapper>
  );
}
