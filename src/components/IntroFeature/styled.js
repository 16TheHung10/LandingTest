import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import UBorder from "../../assets/images/u-border.png";

export const IntroFeatureWrapper = styled.section`
  min-width: 330px;
  width: 100%;
  background: black;
  .group {
    background-image: url(${ZBorder});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 60rem;
    mix-blend-mode: screen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &:nth-child(1) {
      margin: -1rem auto;
    }
    &:last-child {
      background-image: url(${UBorder});
      width: 84%;
    }
    .item {
      /* margin-bottom: 16rem; */
      width: 50%;
    }
    h3 {
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
