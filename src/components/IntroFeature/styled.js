import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import UBorder from "../../assets/images/u-border.png";

export const IntroFeatureWrapper = styled.section`
  min-width: 330px;
  background: black;
  .group {
    background-image: url(${ZBorder});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 102rem;
    margin: auto;
    height: 58rem;
    padding: 11rem 0;
    mix-blend-mode: screen;
    &:nth-child(1) {
      margin: -1rem auto;
    }
    &:last-child {
      background-image: url(${UBorder});
      width: 72rem;
      height: 54rem;
      padding: 9rem;
      margin: -1rem auto;
    }
    .item {
      margin-bottom: 16rem;
    }
    h1 {
      color: white;
    }
    a {
      text-decoration: none;
      color: #36b0cd;
      margin-top: 1rem;
      display: inline-block;
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    .group {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .group {
      .item {
        margin-bottom: 12rem;
      }
      &:last-child {
        width: auto;
      }
    }
  }
`;
