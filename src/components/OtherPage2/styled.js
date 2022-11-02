import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";

export const Other2Wrapper = styled.section`
  min-width: 1199px;
  background: black;
  min-width: 330px;
  display: flex;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  align-items: center;
  color: white;
  padding: 0 20rem;
  gap: 7rem;
  img {
    height: 100%;
  }
  .item {
    width: 50%;
    margin-left: auto;
  }
  .content {
    text-align: left;
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
      font-size: 1.4rem;
      line-height: 2.7rem;
    }
  }
  @media screen and (max-width: 1399px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    background-position: center;
    .content {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0px 5rem;
  }
  @media screen and (max-width: 575px) {
  }
`;
