import styled from "styled-components";
export const SecurityWrapper = styled.div`
  min-width: 330px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  .content {
    flex-basis: 70rem;
    text-align: left;
  }
  .image {
    width: 60%;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
  }
`;
