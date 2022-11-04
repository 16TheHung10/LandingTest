import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import ZBorder2 from "../../assets/images/triple-u.png";
import ZBorder1 from "../../assets/images/double-u.png";
import UBorder from "../../assets/images/u-border.png";

export const IntroFeatureWrapper = styled.section`
  min-width: 330px;
  width: 100%;
  background: black;
  .group {
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
    /* &:last-child {
      background-image: url(${UBorder});
      width: 84%;
    } */
    .item {
      /* margin-bottom: 16rem; */
      width: 90%;
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
  .gr-1 {
    background-image: url(${ZBorder1});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 60rem;
    mix-blend-mode: screen;
    .item {
      &:first-child {
        text-align: right;
      }
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
  .gr-2 {
    background-image: url(${ZBorder2});
    background-size: 100% 135%;
    background-repeat: no-repeat;
    width: 100%;
    height: 90rem;
    mix-blend-mode: screen;
    margin-top: 0.7rem;
    .item {
      &:first-child,
      &:nth-child(3) {
        text-align: right;
      }
      &:nth-child(2) {
        text-align: left;
      }
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
        margin-bottom: 9rem;
      }
      &:last-child {
        width: auto;
      }
    }
    .gr-1 {
      .item {
        p {
          width: 100%;
        }
      }
    }
  }
`;
