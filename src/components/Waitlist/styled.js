import styled from "styled-components";
import bg from "../../assets/preorder/bg.png";

export const PreOrderWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content{
    height: 80vh;
  }

  .content_left {
    width: 40%;
    margin-right: auto;
  }

  .content_t {
    text-align: start;
  }

  .content_title {
    text-align: start;
  }

  .content_p {
    text-align: start;
  }

  .content_form {
    display: flex;
    flex-direction: column;
  }

  .content_input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #b4b4b4;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    margin-top: 30px;
  }

  .content_input::placeholder {
    color: #fff;
  }

  .content_btn {
    margin: 35px auto 0;    
  }

  .warning_content {
    margin: 30px auto 0;
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .warning_img {
    height: 20px;
    width: 20px;
    margin-right: 16px;
  }

  .warning_item {
    display: flex;
    flex-direction: column;
  }

  .warning_text {
    font-weight: 400;
    font-size: 10px;
    color: #b4b4b4;
    text-align: left;
  }
`;
