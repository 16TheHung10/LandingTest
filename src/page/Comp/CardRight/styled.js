import styled from "styled-components";

export const CardRightWrapper = styled.section`
  text-align: ${(props) => props.align || "right"};
  border: 1px dashed #9747ff;
  border-radius: 5px;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 4.5rem;
  h1 {
    color: white;
  }
  .section-one {
    button {
      color: #36b0cd;
      background-color: transparent;
      margin-top: 1.5rem;
      font-size: 1.6rem;
      border: none;
    }
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1099px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
