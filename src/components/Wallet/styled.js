import styled from "styled-components";
import bg from "../../assets/wallet/bg.png";
import bg_1 from "../../assets/wallet/bg_1.png";
import bg_2 from "../../assets/wallet/bg_2.png";
import bg_3 from "../../assets/wallet/bg_3.png";
import bg_4 from "../../assets/wallet/bg_4.png";

export const WalletWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_right {
    width: 50%;
    margin-left: auto;
  }

  .content_text {
    width: 75%;
    margin: 0 auto;
    text-align: start;
  }

  .content_card {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .card_item_odd {
    width: 30%;
  }

  .card_item {
    width: 20%;
  }

  .item_bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 120px;
  }

  .item_bg p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    padding: 45px 20px 0 50px;
  }

  .bg_1 {
    background-image: url(${bg_1});
  }

  .bg_2 {
    background-image: url(${bg_2});
  }

  .bg_3 {
    background-image: url(${bg_3});
  }

  .bg_4 {
    background-image: url(${bg_4});
  }

  @media (max-width: 350px) {
    .item_bg p{
      font-size: 10px;
      padding: 0;
    }
  }
`;
