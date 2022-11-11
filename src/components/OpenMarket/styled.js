import styled from "styled-components";
import bg from "../../assets/openMarket/bg.png";

export const OpenMarketWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_left{
    width: 44%;
    margin-left: auto;
    text-align: start;
  }
`;
