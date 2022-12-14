import styled from "styled-components";

export const InnovationWrapper = styled.section`
  min-width: 330px;
  display: flex;
  flex-direction: column;
  background: black;
  padding: 1rem;
  color: white;
  align-items: center;
  img {
    width: 90%;
  }
  .content {
    width: 35%;
    img {
      width: 40%;
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 1199px) {
    .content {
      width: 100%;
      img {
        width: 20%;
      }
    }
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
