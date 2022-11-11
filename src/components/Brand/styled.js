import styled from "styled-components";
import bg from "../../assets/brand/bg.png";

export const BrandWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000;

  .content_right {
    width: 40%;
    margin-left: auto;
    text-align: left;
  }

  .content_li {
    font-weight: 500;
    font-size: 24px;
    color: #838383;
  }
`;
