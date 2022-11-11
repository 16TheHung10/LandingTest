import styled from "styled-components";
import bg from "../../assets/home/bg.png";

export const HomeWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    align-items: unset;
  }

  .content_text {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #21d4ff;
    text-align: end;
    text-transform: uppercase;
  }

  .home_img {
    width: 100%;
  }
`;
