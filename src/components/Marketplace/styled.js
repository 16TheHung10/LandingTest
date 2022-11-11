import styled from "styled-components";
import bg from "../../assets/marketplace/bg.png";

export const MarketplaceWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000;
  
  .content_left{
    width: 50%;
    margin-right: auto;
    text-align: start;
  }
`;
