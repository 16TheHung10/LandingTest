import styled from "styled-components";
import bg from "../../assets/readyToStart/bg.png"

export const ReadyToParty = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    justify-content: unset;
    flex-direction: unset;
    position: relative;
  }

  .content_text {
    width: 50%;
    margin-left: auto;
  }

  .content_title {
    line-height: 130%;
  }
`;
