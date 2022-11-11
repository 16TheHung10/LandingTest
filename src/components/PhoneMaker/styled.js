import styled from "styled-components";
import bg from "../../assets/phoneMaker/bg.png";

export const PhoneMakerWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_right{
    width: 43%;
    margin-left: auto;
  }

  .content_p{
    color:#ffffff;
  }
`;
