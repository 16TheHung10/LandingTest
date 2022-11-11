import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HomeWrapper } from "./styled";
import text from "../../assets/home/text.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <HomeWrapper className="home">
      <div className="content">
        <h1 className="content_text">FOR THE REAL WEB3</h1>

        <div className="home_img">
          <img src={text} alt="" width="100%" height="100%" />
        </div>
      </div>
    </HomeWrapper>
  );
} 
