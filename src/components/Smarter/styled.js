import styled from "styled-components";
import bg from "../../assets/smarter/bg.png";
import btn from "../../assets/smarter/btn.png";

export const SmarterWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_right {
    width: 40%;
    margin-right: auto;
    text-align: start;
  }

  .content_ul{
    margin-top: 20px;
  }

  .content_btn_img {
    margin-top: 40px;
    background-image: url(${btn});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: transparent;
    padding: 20px 50px;
    display: flex;
    align-items: center;
  }

  .btn_img {
    width: 15%;
    margin-right: 30px;
  }
`;
