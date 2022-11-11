import styled from "styled-components";
import bg from "../../assets/development/bg.png";

export const DevelopmentWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  
  .content_left{
    width: 50%;
    margin-right: auto;
    text-align: start;
  }
`;
