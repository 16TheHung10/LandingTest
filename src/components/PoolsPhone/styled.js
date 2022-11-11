import styled from "styled-components";
import bg from "../../assets/poolsPhone/bg.png";

export const PoolsPhoneWrapper = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content_right{
    width: 50%;
    margin-left: auto;
  }

  .content_title, .content_p{
    text-align: left;
  }

  .content_table{
    display: flex;
    justify-content: start;
    margin-top: 50px;
  }

  .table_left{
    width: 20%;
    text-align: left;
    border-right:  1px solid #A8B7C4;
  }

  .table_right{
    text-align: left;
    padding-left: 50px;
  }
`;
