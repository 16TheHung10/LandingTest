import React from "react";
import { ReferralWrapper } from "./styled";
import Card1 from "../../assets/images/referal-card-1.png";
import Card2 from "../../assets/images/referal-card-2.png";
import Card3 from "../../assets/images/referal-card-3.png";
import Card4 from "../../assets/images/referal-card-4.png";
import PhoneImage from "../../assets/images/referral_phome_img.png";
import img1 from "../../assets/images/referral/1.png";
import img2 from "../../assets/images/referral/2.png";
import img3 from "../../assets/images/referral/3.png";
import img4 from "../../assets/images/referral/4.png";
import Card from "./Card/Card";
import { useTranslation } from "react-i18next";
const mockCardContent = [
  {
    img: img1,
    title: "sustainable-revenue",
    des: "pools-is-the-world's-first-reward-only-phone-created-by-the-web3-mobile-revolution-and-becomes-the-best-tool-for-sustainable-revenue-generation",
  },
  {
    img: img2,
    title: "pools-society",
    des: "join-the-pools-ecosystem-today-and-start-creating-mobile-experience-as-you've-never-seen-before.",
  },
  {
    img: img3,
    title: "decentralized-exchange",
    des: "users-can-easily-swap-or-trade-rewarded-tokens-at-any-time-on-the-decentralized-exchange-'pools’.-furthermore,-digital-assets-can-be-easily-used-by-staking-and-participating-in-the-dao.",
  },
  {
    img: img4,
    title: "decentralized-messenger",
    des: "guaranteed-diverse-rewards-and-perfect-privacy-features",
  },
];
export default function Referral() {
  const { t, i18n } = useTranslation();

  return (
    <ReferralWrapper className="container">
      <div className="header">
        <h3>{t("‘\"it-doesn't-get-any-better-than-that.”")}</h3>
        <h1>{t("referral-reward")}</h1>
        <p>
          {t(
            "the-referral-reward-pools-system-will-generate-a-surprising-profit-when-you-refer-the-product-to-others."
          )}
        </p>
      </div>
      <div className="img">
        <img src={PhoneImage} alt="" />
      </div>
      <div className="cards">
        {/* <div className="img-group">
          <div className="img">
            <img src={Card1} alt="referral" />
          </div>
          <div className="img">
            <img src={Card2} alt="referral" />
          </div>
        </div>
        <div className="img-group">
          {" "}
          <div className="img">
            <img src={Card3} alt="referral" />
          </div>
          <div className="img">
            <img src={Card4} alt="referral" />
          </div>
        </div> */}
        {mockCardContent.map((item, index) => {
          const { img, title, des } = item;
          return (
            <Card
              key={index}
              className="card_item"
              img={img}
              des={des}
              title={title}
            />
          );
        })}
      </div>
    </ReferralWrapper>
  );
}
