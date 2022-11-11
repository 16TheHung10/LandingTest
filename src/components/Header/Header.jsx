import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import logo from "../../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HeaderWrapper } from "./styled";

const NavData = [
  {
    name: "POOLS Phone",
    link: "",
  },
  {
    name: "Brand Story",
    link: "brand-story",
  },
  {
    name: "Pre-order",
    link: "",
  },
  {
    name: "News",
    link: "news",
  },
  {
    name: "Download",
    link: "download",
  },
  {
    name: "Support",
    link: "",
  },
];

export default function Header() {
  const appContext = useContext(AppContext);
  const [selectedSection, setSelectedSection] = useState(
    localStorage.getItem("selectedSection" || "pre-order")
  );
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { setLanguage } = appContext;
  const params = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (e) => {
    const value = e.target.value;
    setLanguage(value);
  };

  useEffect(() => {
    if (params.hash !== "") {
      const element = document.querySelector(params.hash);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [params]);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <HeaderWrapper>
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <nav>
          <ul className="nav_text">
            {NavData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`nav_item ${
                    selectedSection === item.link ? "active" : ""
                  }`}
                >
                  <button
                    className="nav_btn content_p"
                    onClick={() => {
                      setSelectedSection(item.link);
                      navigate(`/${item.link}`);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav_icon">
            <div
              className={`mobile_menu ${
                isShowMenu ? "show_menu" : "hide_menu"
              }`}
            >
              {NavData.map((item, index) => {
                return (
                  <button
<<<<<<< HEAD
                    className="nav_btn"
                    onClick={() => {
                      setSelectedSection(item.link);
                      navigate(`"/${item.link}"`);
                    }}
=======
                  className="nav_btn"
                  onClick={() => {
                    setSelectedSection(item.link);
                    navigate(`"/#${item.link}"`);
                  }}
>>>>>>> 2d88b153af1ae420e63d639a3fe23a8ce3a3e578
                  >
                    {t(item.link)}
                  </button>
                  
                  );
                })}
                {/* <div id="google_translate_element" className="languages"></div> */}
            </div>
            <AiOutlineMenu
              onClick={() => setIsShowMenu((prev) => !prev)}
              style={{ fontSize: "5rem" }}
            />
          </div>
        </nav>
        <nav className="nav-config">
          <div id="google_translate_element" className=" languages"></div>
        </nav>
<<<<<<< HEAD
s
        <div id="google_translate_element"></div>
=======
          <button className="content_btn">Get POOLS NFT</button>
>>>>>>> 2d88b153af1ae420e63d639a3fe23a8ce3a3e578
      </header>
    </HeaderWrapper>
  );
}
