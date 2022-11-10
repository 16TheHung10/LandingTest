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
    link: "pre-order",
  },
  {
    name: "Brand Story",
    link: "pre-installed",
  },
  {
    name: "Pre-order",
    link: "pre-order",
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
    link: "support",
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
  console.log(selectedSection);
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
                    className="nav_btn"
                    onClick={() => {
                      setSelectedSection(item.link);
                      navigate(`/#${item.link}`);
                    }}
                  >
                    {t(item.link)}
                  </button>
                </li>
              );
            })}
            {/* <li
              className={`nav_item ${
                selectedSection === "pre-order" ? "active" : ""
              }`}
            >
              <button
                className="nav_btn"
                onClick={() => {
                  setSelectedSection("pre-order");
                  navigate("/#pre-order");
                }}
              >
                {t("pre-order")}
              </button>
            </li>
            <li
              className={`nav_item ${
                selectedSection === "pre-installed" ? "active" : ""
              }`}
            >
              <button
                className="nav_btn"
                onClick={() => {
                  setSelectedSection("pre-installed");
                  navigate("/#pre-installed");
                }}
              >
                {t("pre-installed")}
              </button>
            </li> */}
            {/* <li className={`nav_item `}>
              <button
                className="nav_btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("pre-installed")}
              </button>
            </li> */}
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
                    className="nav_btn"
                    onClick={() => {
                      setSelectedSection(item.link);
                      navigate(`"/#${item.link}"`);
                    }}
                  >
                    {t(item.link)}
                  </button>
                );
              })}
              {/* <button
                className="nav_btn"
                onClick={() => {
                  setSelectedSection("pre-installed");
                  navigate("/#pre-installed");
                }}
              >
                {t("pre-installed")}
              </button>
              <button
                className="nav_btn"
                onClick={() => {
                  setSelectedSection("pre-installed");
                  navigate("/#pre-installed");
                }}
              >
                {t("pre-installed")}
              </button> */}
            </div>

            <AiOutlineMenu
              onClick={() => setIsShowMenu((prev) => !prev)}
              style={{ fontSize: "5rem" }}
            />
          </div>
        </nav>
        <nav className="nav-config">
          <div className="languages">
            <select
              onChange={handleChangeLanguage}
              defaultValue={localStorage.getItem("i18nextLng")}
            >
              <option value="en">Eng</option>
              <option value="vi">VN</option>
              <option value="kr">Kor</option>
            </select>
            {/* <AiFillCaretDown fill="white" /> */}
          </div>
          {/* <div className="search feature">
            <AiOutlineSearch fill="white" />
          </div>
          <div className="cart feature">
            <AiOutlineShopping fill="white" />
          </div> */}
        <div className="get_NFT">
          <span className="item_get">Get POOLS NFT</span>
        </div>
        </nav>

      </header>
    </HeaderWrapper>
  );
}
