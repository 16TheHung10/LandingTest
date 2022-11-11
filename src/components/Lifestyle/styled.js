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
    width: fit-content;
    padding: 30px 50px;
    text-align: left;
  }

  .content_content {
    width: fit-content;
  }

  .content_text {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .p_border {
    color: #fff;
    padding: 10px 40px;
    border-right: 1px solid #a8b7c4;
  }

  .p_border:last-child {
    border-right: none;
  }
`;
