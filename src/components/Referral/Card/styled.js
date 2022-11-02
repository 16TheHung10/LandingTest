import border from "../../../assets/images/referral/border.png";
import styled from "styled-components";
export const CardWrapper = styled.div`
  position: relative;
  background-image: url(${border});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
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
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
