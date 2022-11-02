import styled from "styled-components";
import layerImage from "../../assets/images/s21-untra.png";

export const CompWrapper = styled.section`
  min-width: 330px;
  background-color: black;
  padding: 0 24rem;

  .learn_more {
    border: 2px solid white;
    color: white;
    background-color: transparent;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    display: block;
    margin-bottom: 9.6rem;
  }
  .content {
    display: flex;
    gap: 10%;
  }
  .content-left {
    border: 1px dashed #9747ff;
    border-radius: 5px;
    align-self: flex-start;
  }
  .content-left,
  .content-right {
    width: 50%;
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1099px) {
  }
  @media screen and (max-width: 989px) {
    .content {
      flex-direction: column;
      .content-left,
      .content-right {
        width: 100%;
        margin-bottom: 10rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 575px) {
  }
`;
