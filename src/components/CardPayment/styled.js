import styled from "styled-components";

export const CardPaymentWrapper = styled.section`
  background: #000000;

  .content_card {
    width: 70%;
    margin-top: 70px;
  }

  .card_item {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }

  .card_item:last-child{
    margin-bottom: 0;
  }

  .item_img {
    width: 20%;
  }

  .content_ul {
    text-align: start;
    padding-left: 50px;
  }
`;
