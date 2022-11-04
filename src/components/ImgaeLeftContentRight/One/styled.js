import styled from "styled-components";

export const ShoppingMallWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 4;
    gap: 5rem;
    &-text {
      width: 50%;
      .h1 {
        text-align: left;
        h1 {
          color: #21d4ff;
        }
      }
      p {
        text-align: left;
      }
    }
  }
  .img {
    width: 35%;
    img {
      width: 100%;
    }
  }
  .footer-bg {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #323232 0%,
      rgba(0, 0, 0, 0) 100%
    );
    transform: translate(-40%, -5rem);
    z-index: 1;
    position: relative;
    height: 10rem;
    width: 100%;
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
