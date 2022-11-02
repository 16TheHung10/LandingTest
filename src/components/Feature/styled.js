import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";

export const FeatureWrapper = styled.section`
  min-width: 330px;
  padding: 6.3rem 23rem 10rem;
  position: relative;
  color: white;
  background-image: url(${layerImage});
  background-color: black;
  background-repeat: no-repeat;
  background-position: 85% -50%;
  height: 110rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content-top {
    z-index: 999;
    .title {
      background: linear-gradient(90.07deg, #fafafb 0.98%, #21d4ff 89.6%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      font-size: 9.6rem;
      font-weight: 700;
      line-height: 14.4rem;
      text-align: left;
    }
    .description {
      text-align: left;
      width: 90%;
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
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    padding: 0 5rem;
    background-position: 100% -8%;
  }
  @media screen and (max-width: 767px) {
    background-size: cover;
  }
  @media screen and (max-width: 575px) {
  }
`;
