import styled from "styled-components";
import bg from "../../assets/download/bg.png";

export const DownloadWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
    margin-top: 100px;
  }

  .card_item {
    border: 2px solid #a8b7c4;
    padding: 50px 100px;
    background: transparent;
  }

  .item_img {
    width: 100%;
  }

  .item_text {
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
`;
