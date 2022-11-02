import React from "react";
import { FooterWrapper } from "./styled";
import { AiOutlineMedium } from "react-icons/ai";
import ScocialIcons from "../../assets/images/footer-icon-socicals.png";
import { ReactComponent as Instagram } from "../../assets/svgs/ins.svg";
import { ReactComponent as Face } from "../../assets/svgs/fb.svg";
import { ReactComponent as Twister } from "../../assets/svgs/tw.svg";
import { ReactComponent as Medium } from "../../assets/svgs/md.svg";
import { ReactComponent as LinkedIn } from "../../assets/svgs/li.svg";
import Logo from "../../assets/images/footer-logo-icon.png";
const footerLink = [
  "Useful Links",
  "Support",
  "About Us",
  "Home",
  "Help Center",
  "Features",
  "Create Account",
  "Contact Us",
];
const socialsArr = [
  {
    link: "https://www.facebook.com/profile.php?id=100086429633297 ",
    element: <Face className="socials" />,
    alt: "facebook",
  },
  {
    link: "https://www.facebook.com/groups/458991386296680 ",
    element: <Face className="socials" />,
    alt: "facebook group",
  },
  {
    link: "https://twitter.com/pools_club",
    element: <Twister className="socials" />,
    alt: "twitter",
  },
  {
    link: "https://www.linkedin.com/in/pools-contact-bb6636253/ ",
    element: <Medium className="socials" />,
    alt: "Medium",
  },
  {
    link: "https://medium.com/@contact_82696",
    element: <LinkedIn className="socials" />,
    alt: "LinkedIn",
  },
];
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="left" style={{ margin: "auto" }}>
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
      {/* <div className="right">
        {footerLink.map((item, index) => {
          return (
            <a href="#" key={index}>
              {item}
            </a>
          );
        })}
      </div> */}
    </FooterWrapper>
  );
}
