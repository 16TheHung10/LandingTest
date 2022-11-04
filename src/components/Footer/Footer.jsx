import React from "react";
import { FooterWrapper } from "./styled";
import { AiOutlineMedium } from "react-icons/ai";
import ScocialIcons from "../../assets/images/footer-icon-socicals.png";
import { ReactComponent as Instagram } from "../../assets/svgs/ins.svg";
import { ReactComponent as Face } from "../../assets/svgs/fb.svg";
import { ReactComponent as Twister } from "../../assets/svgs/tw.svg";
import { ReactComponent as Medium } from "../../assets/svgs/md.svg";
import { ReactComponent as LinkedIn } from "../../assets/svgs/li.svg";
import { ReactComponent as Discord } from "../../assets/svgs/dc.svg";
import { ReactComponent as Telegram } from "../../assets/svgs/tl.svg";
import Logo from "../../assets/images/footer-logo-icon.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
const footerLink = [
  { title: "Home", link: "/" },
  { title: "Join-Waitlist", link: "/#pre-order" },
  { title: "FAQ", link: "faq" },
  { title: "Contact-us", link: "/contact-us" },
];
const socialsArr = [
  {
    link: "https://www.facebook.com/profile.php?id=100086429633297 ",
    element: <Face className="socials" />,
    alt: "facebook",
  },
  // {
  //   link: "https://www.facebook.com/groups/458991386296680 ",
  //   element: <Face className="socials" />,
  //   alt: "facebook group",
  // },
  {
    link: "https://twitter.com/pools_club",
    element: <Twister className="socials" />,
    alt: "twitter",
  },
  {
    link: "https://medium.com/@contact_82696",
    element: <LinkedIn className="socials" />,
    alt: "LinkedIn",
  },
  {
    link: "https://discord.gg/sD4CbW4Ys8",
    element: <Discord className="socials" />,
    alt: "Discord",
  },
  {
    link: "https://t.me/Poolsclub",
    element: <Telegram className="socials" />,
    alt: "Telegram",
  },
  {
    link: "https://www.linkedin.com/in/pools-contact-bb6636253/ ",
    element: <Medium className="socials" />,
    alt: "Medium",
  },
];
export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <div className="left">
        <img src={Logo} alt="" className="logo" />
        <div className="socials-link">
          {socialsArr.map((item, index) => {
            return (
              <a key={index} href={item.link} title={item.alt} target="_blank">
                {item.element}
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
              style={{ cursor: "pointer" }}
              key={index}
            >
              {t(item.title)}
            </p>
          );
        })}
      </div>
    </FooterWrapper>
  );
}
