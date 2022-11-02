import styled from "styled-components";

export const CardLeftWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 7rem;
  padding: 4rem;
  h1 {
    color: white;
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1099px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
    img {
      width: 40%;
    }
  }
  @media screen and (max-width: 575px) {
    img {
      width: 60%;
    }
  }
`;
