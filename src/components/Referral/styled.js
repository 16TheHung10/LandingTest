import styled from "styled-components";
export const ReferralWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  color: white;
  padding: 15rem;
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
      margin: 1rem 0;
    }
    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.7rem;
      text-align: center;
      color: var(--textGray);
    }
  }
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    /* .card_item {
      flex-basis: 54rem;
    } */
  }
  @media screen and (max-width: 1199px) {
    .cards {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
