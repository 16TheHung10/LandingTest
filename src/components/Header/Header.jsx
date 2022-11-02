import React, { useContext, useEffect, useState } from "react";
import { HeaderWrapper } from "./styled";
import logo from "../../assets/images/logo.png";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineShopping,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../App";
export default function Header() {
  const appContext = useContext(AppContext);
  const { setLanguage } = appContext;
  const params = useLocation();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (e) => {
    const value = e.target.value;
    setLanguage(value);
  };
  // useEffect(() => {
  //   i18n.changeLanguage(selectedLanguage);
  // }, [selectedLanguage]);

  useEffect(() => {
    if (params.hash !== "") {
      const element = document.querySelector(params.hash);
      element.scrollIntoView(params.hash);
    }
  }, [params]);
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
            <li className="nav_item active">
              <NavLink to="/#pre-order">{t("pre-order")}</NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/#pre-installed">{t("pre-installed")}</NavLink>
            </li>
            {/* <li className="nav_item">
              <NavLink to="/support">Support</NavLink>
            </li> */}
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
    </HeaderWrapper>
  );
}
