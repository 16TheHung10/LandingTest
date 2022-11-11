import styled from "styled-components";
import bg from "../../assets/smartphone/bg.png";

export const SmartphoneWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_left{
    width: 58%;
    margin-left: auto;
    text-align: start;
  }

  .content_p{
    width: 82%;
  }
`;
