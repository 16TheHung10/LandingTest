import styled from "styled-components";
import bg from "../../assets/camera/bg.png";

export const CameraWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_left{
    width: 40%;
    margin-left: auto;
    text-align: start;
  }
`;
