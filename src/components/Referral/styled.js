import styled from "styled-components";
export const ReferralWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  color: white;
  .header {
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
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
    justify-content: space-between;
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
