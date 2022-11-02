import styled from "styled-components";
export const ReferralWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  color: white;
  padding: 24rem;
  .header {
    h3 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 4.5rem;
      text-align: center;
    }
    h1 {
      font-weight: 600;
      font-size: 6.4rem;
      line-height: 130%;
      text-align: center;
    }
    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.7rem;
      text-align: center;
      color: var(--textGray);
    }
  }
  .cards {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    .img-group {
      display: flex;
    }
    .img {
      width: 50%;
    }
    img {
      width: 100%;
    }
    .card_item {
      flex-basis: 54rem;
    }
  }
  @media screen and (max-width: 1199px) {
    .cards {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 989px) {
    .cards {
      .img-group {
        flex-direction: column;
      }
      .img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    padding: 10rem;
  }
`;
