import React from "react";
import { FooterWrapper } from "./styled";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const footerLink = [
  { title: "Home", link: "/" },
  { title: "Join Waitlist", link: "/#pre-order" },
  { title: "FAQs", link: "faq" },
  { title: "Contact Us", link: "/contact-us" },
];

const socialsArr = [
  {
    link: "https://www.facebook.com/profile.php?id=100086429633297 ",
    element: "assets/footer/face.png",
    alt: "facebook",
  },
  {
    link: "https://twitter.com/pools_club",
    element: "assets/footer/twi.png",
    alt: "twitter",
  },
  {
    link: "",
    element: "assets/footer/pin.png",
    alt: "twitter",
  },
  {
    link: "https://www.facebook.com/groups/458991386296680 ",
    element: "assets/footer/ins.png",
    alt: "instagram",
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <FooterWrapper className="footer">
      <div className="w_content">
        <div className="left">
          <div className="img_logo">
            <img src={Logo} alt="" width="100%" height="100%" />
          </div>

          <div className="socials_link">
            {socialsArr.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  title={item.alt}
                  target="_blank"
                  className="socials_item"
                >
                  <img src={item.element} alt={item.alt} width="100%" height="100%" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="right">
          {footerLink.map((item, index) => {
            return (
              <p
                onClick={() => {
                  if (item.link === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }
                  navigate(`${item.link}`);
                }}
                key={index}
                className="text_item"
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </FooterWrapper>
  );
}
