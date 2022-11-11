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
    padding: 3%;
  }

  .card_item:hover {
    background-image: url(${bgHover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: scale(1.05);
  }

  .item_img {
    width: 100%;
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
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .read_more {
    display: flex;
    justify-content: end;
    text-decoration-line: underline;
  }

  @media (max-width: 1367px) {
    .item_p {
      -webkit-line-clamp: 6;
    }

    .item_title {
      font-size: 20px;
    }

    .item_text {
      font-size: 18px;
    }

    .item_title_date {
      padding: 8px 0 5px;
    }
  }

  @media (max-width: 913px) {
    .content {
      height: fit-content;
      padding: 120px 0 50px 0;
      width: 80%;
    }

    .content_card {
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 40px;
    }

    .card_item {
      width: 47%;
      padding: 5%;
    }
  }

  @media (max-width: 541px) {
    .item_p {
      -webkit-line-clamp: 6;
    }

    .item_title {
      font-size: 16px;
    }

    .item_text {
      font-size: 14px;
    }

    .item_title_date {
      padding: 8px 0 5px;
    }

    .item_date,
    .item_p,
    .read_more {
      font-size: 10px;
    }
    
    .view_all{
      font-size: 16px;
    }
  }

  @media (max-width: 415px) {
    .card_item {
      width: 85%;
      margin: 0 auto;
      padding: 8%;
    }
  }

  @media (max-width: 281px) {
    .content{
      width: 90%;
    }

    .card_item {
      width: 85%;
      margin: 0 auto;
      padding: 8%;
    }
  }
`;
