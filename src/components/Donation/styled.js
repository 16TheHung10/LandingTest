import styled from "styled-components";
import bg from "../../assets/donation/bg.png";

export const DonationWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_left{
    width: 38%;
    margin-right: auto;
    text-align: start;
  }
`;
