import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import UBorder from "../../assets/images/u-border.png";
import preOrder from "../../assets/images/pre-order.png";

export const PreOrderWrapper = styled.section`
  min-width: 330px;
  display: flex;
  padding: 0 0 0 24rem;
  background: black;
  color: white;
  background-image: url(${preOrder});
  background-repeat: no-repeat;
  /* background-position: right;
  background-size: contain; */
  background-position: 0% 100%;
  background-size: initial;
  padding-top: 25rem;
  .left {
    width: 40%;
    margin-bottom: 3rem;
    text-align: left;
    .content {
      margin-bottom: 5rem;
    }
    .form {
      display: flex;
      flex-direction: column;
      input {
        padding: 1rem 1rem;
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--textGray);
        color: white;
      }
      button {
        width: 30%;
        padding: 0.5rem;
        border: 1px solid white;
        background: black;
        color: white;
        border-radius: 3px;
        font-size: 1.8rem;
        margin: 4rem auto auto auto;
      }
    }
    .short_des {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      width: 22rem;
      margin: 4rem auto auto auto;
    }
  }
  .right {
    flex: 1;
    img {
      mix-blend-mode: screen;
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 1199px) {
    padding: 15rem 0 0 15rem;
    background-size: cover;
  }
  @media screen and (max-width: 989px) {
    padding: 5rem 10rem;
    .left {
      width: 100%;
      margin: auto;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 5rem 5rem;
  }
  @media screen and (max-width: 575px) {
    .content {
      p {
        text-align: justify;
      }
    }
  }
`;
