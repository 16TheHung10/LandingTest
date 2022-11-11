import styled from "styled-components";
import bg from "../../assets/download/bg.png";

export const PreOrderWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content{
    height: 100vh;
  }

  @media (max-width: 46.1875em) {
    .content_left {
      width: 100%;
      background: #000000b8;
      min-height: 70%;
      margin: auto;
    }

    .content {
      width: 90%;
    }
  }

  @media (min-width: 46.25em) and (max-width: 63.9375em)
`;
