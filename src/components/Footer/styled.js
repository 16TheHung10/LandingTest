import styled from "styled-components";

export const FooterWrapper = styled.section`
  background: linear-gradient(91.94deg, #223037 0%, #00090d 100%);
  
  .w_content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    align-items: center;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img_logo {
    width: 115px;
    height: 87px;
    margin-bottom: 50px;
  }

  .socials_link {
    display: flex;
    align-items: center;
  }

  .socials_item {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    margin-top: 0;
  }

  .socials_item:last-child {
    margin-right: 0;
  }

  .right {
    display: flex;
    justify-content: space-between;
    width: 45%;
  }

  .text_item {
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
  }
`;
