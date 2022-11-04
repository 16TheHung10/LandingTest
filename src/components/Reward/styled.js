import styled from "styled-components";
import layerImage from "../../assets/images/reward.png";
export const RewardWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  padding: 10rem 0;
  color: white;
  background-image: url(${layerImage});
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  height: 100rem;
  .content {
    text-align: right;
    width: 70rem;
    margin-left: auto;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3.7rem;
    }
    p:first-child {
      font-size: 3rem;
      font-weight: 300;
    }
    h1 {
      font-weight: 600;
      font-size: 6.4rem;
      line-height: 140%;
    }
  }
  .content-bottom {
    display: flex;
    padding-right: 10rem;
    img {
      width: 55%;
    }
    .detail {
      width: 50%;
      text-align: left;
      margin-left: -4%;
      &_item {
        h1 {
          font-style: normal;
          font-weight: 600;
          font-size: 3rem;
          line-height: 4.5rem;
        }
        p {
          color: var(--textGray);
          margin: 2rem 0;
          font-style: normal;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.7rem;
          margin: 1rem 0;
        }
      }
      .prices {
        margin-top: 4rem;
        p {
          color: #21d4ff;
          font-weight: 600;
          font-size: 6.4rem;
          line-height: 130%;
        }
        button {
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 2.7rem;
          padding: 1rem 2rem;
          border: 4px solid white;
          background: transparent;
          color: white;
          width: 21rem;
          border-radius: 5px;
        }
      }
    }
  }
  .footer_info {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
    text-align: right;
    width: 59%;
    align-items: right;
    align-items: end;
    margin-left: auto;
    .prices {
      h1 {
        color: #21d4ff;
      }
      button {
        padding: 0.5rem;
        border: 1px solid white;
        background: black;
        color: white;
        border-radius: 3px;
        font-size: 1.8rem;
        margin-bottom: 3rem;
        padding: 5px 2rem;
      }
    }
    .warning {
      display: flex;
      align-items: center;
      width: 60%;
      span {
        text-align: right;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
      }
      svg {
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .content-bottom {
      .detail_item {
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .content-bottom {
      .detail_item {
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and (max-width: 989px) {
    .content-bottom {
      padding-right: 0;
      flex-direction: column;
      align-items: center;
      .detail_item {
        margin-top: 10rem;
        p {
          text-align: justify;
        }
      }
    }
    .content {
      width: auto;
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .content {
      text-align: center;
    }
    .footer_info {
      margin: auto;
      justify-content: center;
      align-items: center;
      .warning {
        width: 100%;
      }
    }
  }
`;
