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

  .content_table tr:first-child {
    border: unset;
  }

  .content_table tr:nth-child(2) {
    border-top: 2px solid #21d4ff;
  }

  .content_table th {
    color: #21d4ff;
    font-weight: 600;
    font-size: 18px;
  }

  .content_table td {
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
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

  @media (max-width: 1536px) {
    .content_table th,
    .content_table td {
      font-size: 14px;
    }

    .tier {
      width: 80px;
    }

    .include {
      width: 150px;
    }

    .discount {
      width: 200px;
    }

    .sale {
      width: 250px;
    }

    .app_store {
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 80%;
    }
  }

  @media (max-width: 350px) {
    .content {
      width: 80%;
    }

    .content_table{
      overflow-x: scroll;
      width: 90%;
      display: block;
    }
  }
`;
