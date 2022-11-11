import styled from "styled-components";
import bg from "../../assets/roadmap/bg.png";

export const PartnerWrapper = styled.section`
  background: #000000;

  .content {
    height: 200vh;
  }

  .content_card {
    margin-top: 40px;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 90%;
    width: 60%;
  }

  .card_item {
    /* padding: 35px 40px; */
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card_item:nth-child(1),
  .card_item:nth-child(2),
  .card_item:nth-child(5){
    height: 20%;
  }

  .card_item:nth-child(3){
    height: 24%;
  }

  .card_item:nth-child(4){
    height: 16%;
  }

  .card_item:nth-child(odd) {
    align-items: flex-end;
  }

  .card_item:nth-child(even) {
    align-items: flex-start;
  }

  .item_text {
  
  }

  .content_p {
    color: #ffffff;
  }

  .card_item:nth-child(odd) .content_p{
    text-align: right;
  }

  .card_item:nth-child(even) .content_p{
    text-align: left;
  }
`;
