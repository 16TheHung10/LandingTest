import styled from "styled-components";
import bg from "../../assets/contribution/bg.png";

export const ContributionWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000;

  .content_right {
    width: 40%;
    margin-right: auto;
    text-align: start;
  }

  .content_right ul li {
    padding-top: 50px;
  }

  .content_right ul li:first-child {
    padding-top: 0;
  }
`;
