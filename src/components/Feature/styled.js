import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";
import layerImage2 from "../../assets/images/feature-bg-2.png";

export const FeatureWrapper = styled.section`
  min-width: 330px;
  padding: 6.3rem 24rem 10rem;
  position: relative;
  color: white;
  background-image: url(${layerImage}), url(${layerImage2});
  background-color: black;
  background-repeat: no-repeat;
  background-position: 100% 25rem;
  padding-top: 184px;
  margin-top: 0px;
  z-index: 99;
  height: 110rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content-top {
    width: 100%;
    z-index: 999;
    margin-top: 19rem;
    h4 {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #a8b7c4;
      text-align: left;
    }
    .title {
      background: linear-gradient(90.07deg, #fafafb 0.98%, #21d4ff 89.6%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      font-size: 9.6rem;
      font-weight: 700;
      line-height: 12.4rem;
      text-align: left;
      text-transform: uppercase;
      position: relative;
      display: flex;
      justify-content: space-between;
      &::after {
        content: "";
        position: absolute;
        background: black;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background: linear-gradient(
          180deg,
          rgb(24 24 24 / 15%) 0%,
          rgb(0 0 0 / 94%) 86%,
          rgb(0 0 0) 100%
        );
      }
    }
    .description {
      text-align: left;
      width: 70%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      h4 {
        font-weight: 600;
        font-size: 3rem;
        line-height: 4.5rem;
      }
      p {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.7rem;
      }
      button {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.7rem;
        padding: 1rem 2rem;
        border: 4px solid white;
        margin-top: 4rem;
        background: transparent;
        color: white;
        width: 21rem;
        border-radius: 5px;
      }
    }
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0%;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 21.09%,
      rgba(0, 0, 0, 0.83) 85.12%,
      #000000 94.01%
    );
  }

  @media screen and (max-width: 1400px) {
    .content-top {
      width: 100%;
    }
  }
  @media screen and (max-width: 1199px) {
    padding: 6.3rem 15rem 10rem;

    .content-top {
      .title {
        font-size: 8.6rem;
      }
    }
  }
  @media screen and (max-width: 989px) {
    padding-left: 10rem;
    padding-right: 10rem;
    background-size: contain;
  }
  @media screen and (max-width: 767px) {
    padding-left: 5rem;
    padding-right: 5rem;
    .content-top {
      margin-top: 0;
      .title {
        font-size: 7.6rem;
        line-height: 10.4rem;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .content-top {
      .title {
        font-size: 5.6rem;
      }
    }
  }
`;
