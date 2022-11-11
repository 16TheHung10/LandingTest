import styled from "styled-components";
import bg from "../../assets/lifestyle/bg.png";
import bg_img from "../../assets/lifestyle/bg_img.png";

export const LifestyleWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000;

  .content {
    flex-direction: row;
    justify-content: space-between;
  }

  .content_bg {
    background-image: url(${bg_img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 62%;
    text-align: left;
  }

  .content_title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .content_content {
    width: 35%;
  }

  .content_text {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .p_border {
    color: #fff;
    width: calc(100% / 3);
    border-right: 1px solid #a8b7c4;
  }

  .p_border:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    .content_text{
      flex-direction: column;
    }
  }
`;
