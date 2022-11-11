import styled from "styled-components";
import bg from "../../assets/partner/bg.png";

export const PartnerWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .list_img {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 100px;
    margin-top: 100px;
  }

  .img_item{
    width: calc(100% / 3);
  }
`;
