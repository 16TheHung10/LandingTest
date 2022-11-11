import styled from "styled-components";
import bg from "../../assets/appStore/bg.png";

export const AppStoreWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_left{
    width: 36%;
    margin-left: auto;
    text-align: start;
  }
`;
