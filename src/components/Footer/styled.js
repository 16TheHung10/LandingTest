import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import UBorder from "../../assets/images/u-border.png";

export const FooterWrapper = styled.section`
  min-width: 330px;
  display: flex;
  background: linear-gradient(91.94deg, #223037 0%, #00090d 100%);
  justify-content: space-between;
  padding: 6rem 16rem;
  gap: 7rem;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    .logo {
      width: 11rem;
    }
    img {
      width: 100%;
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    a {
      font-size: 2rem;
      color: white;
      width: calc(100% / 3);
    }
  }
  .socials-link {
    display: flex;
    gap: 2rem;
  }
  .socials {
    background: white;
    height: 3rem;
    aspect-ratio: 1/1;
    width: 3rem;
    padding: 2px;
    border-radius: 5px;
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    padding: 6rem 10rem;
  }
  @media screen and (max-width: 767px) {
    padding: 6rem 5rem;
    .right {
      a {
        font-size: 1.6rem;
      }
    }
  }
  @media screen and (max-width: 575px) {
  }
`;
