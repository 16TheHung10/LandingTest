import styled from "styled-components";
import bg from "../../assets/video/bg.png";

export const VideoWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    height: 200vh;
    width: 100%;
  }

  .content_video{
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .video_intro{
    width: 100%;
    height: 100%;
  }
`;
