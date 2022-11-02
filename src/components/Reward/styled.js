import styled from "styled-components";
export const RewardWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  padding: 10rem 0;
  color: white;
  .header {
    padding: 0 24rem;
  }
  .content {
    text-align: left;
    width: 70rem;
    margin-right: auto;
    margin-bottom: 5rem;

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
      line-height: 130%;
    }
  }
  .content-bottom {
    display: flex;
    padding-right: 10rem;
    img {
      width: 60%;
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
    .header {
      padding: 0 5rem;
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
