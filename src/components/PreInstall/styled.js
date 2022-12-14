import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";

export const RecapWrapper = styled.section`
  min-width: 330px;
  background-color: black;
  .row {
    display: flex;
    align-items: center;
  }
  img {
    width: 70%;
  }
  .detail {
    /* flex-basis: 45rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 9rem;
    &_item {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        text-decoration: none;
        color: #36b0cd;
        font-size: 1.6rem;
      }
    }
  }
  .footer {
    &_group {
      justify-content: center;
      color: white;
      display: flex;
      .footer_item {
        padding: 3rem 6.5rem;
        border-right: 1px solid var(--textGray);
        font-size: 1.8rem;
        &:last-child {
          border: none;
        }
      }
    }
  }
  @media screen and (max-width: 1399px) {
    img {
      width: 100%;
    }
    .row {
      flex-wrap: wrap;
    }
    .detail {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 5rem;
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    .detail {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 4rem;
      justify-content: center;
      align-items: center;
    }
    .detail_item {
      text-align: center;
    }
    .footer_group {
      .footer_item {
        padding: 3rem 1rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .detail {
      flex-wrap: wrap;
    }
    .footer {
      width: 100%;
      .footer_group {
        flex-wrap: wrap;
        .footer_item {
          width: 50%;
          border: none;
          border-bottom: 1px solid white;
        }
      }
    }
  }
`;
