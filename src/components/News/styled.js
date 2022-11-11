import styled from "styled-components";
import bgHover from "../../assets/news/bg_hover.png";
import bg from "../../assets/news/bg.png";

export const NewsWrapper = styled.section`
  background: #000000;

  .content_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }

  .view_all {
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    text-decoration-line: underline;
  }

  .content_card {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .card_item {
    width: 29%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 40px 40px 30px;
  }

  .card_item:hover{
    background-image: url(${bgHover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: scale(1.05);
  }

  .item_img {
    width: 100%;
    height: 280px;
  }

  .item_text {
    font-weight: 600;
    font-size: 21.2357px;
    color: #ffffff;
    text-align: left;
    padding-top: 15px;
  }

  .item_title_date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0 10px;
  }

  .item_title {
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }

  .item_date,
  .item_p,
  .read_more {
    font-weight: 400;
    font-size: 12px;
    color: #b4b4b4;
  }

  .item_p {
    text-align: left;
    line-height: 150%;
  }

  .read_more {
    display: flex;
    justify-content: end;
    text-decoration-line: underline;
  }
`;
