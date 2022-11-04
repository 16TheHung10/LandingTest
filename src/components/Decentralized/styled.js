import styled from "styled-components";
import CardBorder from "../.././assets/images/decentralized-card.png";
import CardBorder2 from "../.././assets/images/decentralized-card-2.png";

export const DecentralizedWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  padding-top: 0;
  .title {
    margin-bottom: 10rem;
    h1 {
      color: #21d4ff;
    }
  }
  .content {
    .row {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      .card {
        background-image: url(${CardBorder2});
        background-size: 100% 100%;
        width: 40rem;
        height: 7rem;
        margin-bottom: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
        }
      }
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .content {
      .row {
        flex-direction: column;
        .card {
          width: 100%;
          margin-bottom: 3rem;
        }
      }
    }
  }
`;
