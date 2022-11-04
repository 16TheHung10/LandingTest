import border from "../../../assets/images/referral/border.png";
import styled from "styled-components";
export const CardWrapper = styled.div`
  position: relative;
  background-image: url(${border});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  width: 45%;
  margin-bottom: 50px;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 
  &::after {
    content: "";
    position: absolute;
    top: 18%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: -8rem -1rem;
    background-repeat: no-repeat;
    background-size: 56rem;
  } */
  .icon {
    width: 10%;
    img {
      width: 100%;
    }
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 4.5rem;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.7rem;
    text-align: center;
    color: var(--textGray);
    width: 80%;
  }
  @media screen and (max-width: 1536px) {
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 1400px) {
    width: 47%;
    p {
      font-size: 1.3rem;
    }
    h1 {
      font-size: 2.2rem;
      line-height: 2.5rem;
    }
  }
  @media screen and (max-width: 820px) {
    width: 100%;

    p {
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 500px) {
    height: 25vh;
  }
  @media screen and (max-width: 400px) {
  }
  @media screen and (max-width: 300px) {
    width: 100%;
    height: 28vh;
  }
`;
