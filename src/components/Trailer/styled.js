import styled from "styled-components";
export const TrailerWrapper = styled.div`
  min-width: 330px;
  .header {
    width: auto;
    margin-left: auto;
    .content {
      margin-bottom: 5rem;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 3rem;
        line-height: 4.5rem;
        text-align: right;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 6.4rem;
        line-height: 130%;
        text-align: right;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.7rem;
        text-align: right;
      }
    }
  }
  .video {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
    .header {
    }
  }
  @media screen and (max-width: 575px) {
  }
`;
