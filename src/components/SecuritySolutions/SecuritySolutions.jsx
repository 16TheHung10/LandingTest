import React from "react";
import { SecurityWrapper } from "./styled";
import image from "../../assets/images/security_section_img2.png";

export default function SecuritySolutions() {
  return (
    <SecurityWrapper>
      <div className="content">
        <h3>Secure digital financial transactions</h3>
        <h1>Mobile Device Security Solutions</h1>
        <p>
          Real-time protection from threats related to network attacks,
          including downloaded apps, phishing messages, email viruses with
          phishing content, and malware. It also prevents applications from
          compromising users' security and privacy.
        </p>
      </div>
      <div className="image">
        <img src={image} alt="phone" style={{}} />
      </div>
    </SecurityWrapper>
  );
}
