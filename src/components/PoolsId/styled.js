import styled from "styled-components";

export const PoolsIdWrapper = styled.section`
  background: #000000;

  .content {
    flex-direction: row;
    justify-content: space-between;
  }

  .content_left {
    width: 48%;
    text-align: left;
  }

  .content_right{
    width: 52%;
    text-align: left;
  }

  .content_img {
    width: 75%;
  }

  .right_content{
    padding-left: 100px;
  }

  .content_ul {
    margin-top: 50px;
  }

  .content_li {
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
`;
