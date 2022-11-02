import styled from "styled-components";
import ZBorder from "../../assets/images/z_border.png";
import UBorder from "../../assets/images/u-border.png";

export const PoolPartyWrapper = styled.section`
  min-width: 330px;
  background: white;
  color: black;
  background-color: black;
  color: white;

  .content-one {
    padding: 9.3rem;
    h3 {
      font-size: 3rem;
    }
    h1 {
      font-weight: 600;
      font-size: 6.4rem;
      line-height: 130%;
    }
    p {
      color: white;
    }
  }
  .content-two {
    width: 100%;
    background-color: white;
    color: black;
  }
  .image-2 {
  }
  .content {
    width: 50%;
    text-align: center;
    margin: auto;
    p {
      margin-bottom: 1rem;
    }
  }
  img {
    width: 100%;
  }
  .image-1 {
    width: 70%;
    padding: 10rem 0;
    margin: auto;
  }
  .image-2 {
    padding: 10rem 0;
    display: flex;

    align-items: center;
    .content {
      margin-top: 19%;
      margin-left: -25rem;
      width: 77.5rem;
      text-align: center;

      h1 {
        font-size: 6.4rem;
      }
      button {
        margin-top: 2rem;
        padding: 0.5rem 2rem;
        border: 1px solid black;
        font-weight: 600;
      }
      p {
        margin: 3rem 0;
      }
    }
    img {
      width: 60%;
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    .image-2 {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .content {
        margin: 10rem 0 0 0;
      }
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .image-2 {
      .content {
        width: 100%;
        h1 {
          font-size: 5.4rem;
          line-height: 9.5rem;
        }
      }
    }
  }
`;
