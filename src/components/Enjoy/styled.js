import styled from "styled-components";
import bg from "../../assets/enjoy/bg.png"

export const EnjoyWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_right {
    width: 50%;
    margin-right: auto;
    text-align: start;
  }
`;
