import styled from "styled-components";
export const SecurityWrapper = styled.div`
  min-width: 330px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  padding: 18rem 24rem;
  justify-content: space-between;
  align-items: center;
  .content {
    flex-basis: 70rem;
    text-align: left;
    h3 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 4.5rem;
    }
    h1 {
      font-weight: 600;
      font-size: 6.4rem;
      line-height: 130%;
    }
    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.7rem;
    }
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
    padding: 18rem 15rem;
  }
  @media screen and (max-width: 989px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    padding: 18rem 10rem;
  }
  @media screen and (max-width: 575px) {
    padding: 18rem 5rem;
  }
`;
