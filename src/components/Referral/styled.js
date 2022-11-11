import styled from "styled-components";
import bg from "../../assets/referral/bg.png";
import bg_item from "../../assets/referral/bg_item.png";

export const ReferralWrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_center {
    width: 48%;
  }

  .content_card {
    width: fit-content;
    margin: 0 auto;
    background-image: url(${bg_item});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 20px 30px 30px 30px ;
    margin-bottom: 50%;
    margin-top: 20px;
  }

  .p_text {
    text-align: left;
  }
`;
