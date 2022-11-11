import styled from "styled-components";

export const TableWrapper = styled.section`
  background: #000000;

  .content {
    align-items: unset;
    width: 70%;
  }

  .content_table {
    text-align: left;
    width: 100%;
    margin: auto;
  }

  .content_table tr {
    padding: 20px 0;
    display: block;
    border-top: 2px solid #ffffff;
  }

  .content_table tr:first-child{
    border: unset;
  }

  .content_table tr:nth-child(2){
    border-top: 2px solid #21D4FF;
  }

  .content_p.p_blue {
    font-size: 600;
    color: #21d4ff;
  }

  .content_p {
    color: #ffffff;
  }

  .tier {
    width: 110px;
  }

  .include {
    width: 190px;
  }

  .discount {
    width: 240px;
  }

  .sale {
    width: 290px;
  }

  .app_store {
    width: 310px;
  }

  .purchase {
    width: auto;
  }
`;
