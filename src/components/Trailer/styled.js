import styled from "styled-components";
export const TrailerWrapper = styled.div`
  min-width: 330px;
  .header {
    width: auto;
    margin-left: auto;
    .content {
      margin-bottom: 5rem;
      width: 60%;
      margin-left: auto;
      h3 {
        text-align: right;
      }
      h1 {
        text-align: right;
      }
      p {
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
    .header {
      .content {
        width: 70%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .header {
      .content {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 575px) {
  }
`;
