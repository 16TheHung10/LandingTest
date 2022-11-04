import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";

export const Other3Wrapper = styled.section`
  background: black;
  min-width: 330px;
  display: flex;
  /* background-image: url(${(props) => props.bg}); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  align-items: center;
  color: white;
  padding-left: 27rem;
  margin-top: -15rem;
  .item {
    width: 35%;
    margin-left: auto;
    text-align: left;
  }
  .content {
    h2 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 4.5rem;
    }
    h1 {
      font-weight: 600;
      font-size: 6.4rem;
      line-height: 130%;
      color: #21d4ff;
    }
    p {
      font-weight: 400;
      line-height: 2.7rem;
    }
    img {
      margin-top: 2rem;
    }
  }
  .img {
    flex: 1;
    img {
      width: 100%;
      mix-blend-mode: screen;
    }
  }
  @media screen and (max-width: 1399px) {
    .content {
      h1 {
        font-size: 5.4rem;
      }
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 1099px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: 15rem;
    height: auto;
    .content {
      margin: auto;
      text-align: center;
    }
  }
  @media screen and (max-width: 989px) {
    background-position: center;
    .content {
      width: 100%;
      img {
        width: 40%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0px 5rem;
    margin: 0;
  }
  @media screen and (max-width: 575px) {
  }
`;
