import styled from "styled-components";
import bg from "../../assets/brand/bg.png";

export const BrandWrapper = styled.section`
  background: #000000;

  .content {
    height: 135vh;
    margin: unset;
    width: 100%;
  }

  .content_title{
    display: flex;
    align-items: flex-end;
    padding-bottom: 50px;
    height: 35vh;
  }

  .content_text {
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100%;
  }

  .content_ul{
    text-align: start;
    width: 72%;
    height: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .content_ul li{
    padding-bottom: 50px;
  }
`;
