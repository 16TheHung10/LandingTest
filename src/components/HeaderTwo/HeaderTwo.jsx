import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import logo from "../../assets/images/logo.png";
import { HeaderTwoWrapper } from "./styled";
export default function HeaderTwo({ preOrderRef, prInstallRef }) {
  const [selectedSection, setSelectedSection] = useState("pre-order");
  const appContext = useContext(AppContext);
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
  console.log("re-render");
  return (
    <HeaderTwoWrapper>
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav>
          <ul className="nav_text">
            <li
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
            </li>
          </ul>
          <div className="nav_icon">icon</div>
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
        </nav>
      </header>
    </HeaderTwoWrapper>
  );
}
