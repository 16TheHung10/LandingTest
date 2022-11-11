import styled from "styled-components";

export const LifestyleWrapper = styled.section`
  background: #000000;

  .content_p{
    width: 32%;
  }

  .content_text{
    display: flex;
    margin: 30px 0 20px;
    justify-content: center;
    width: 100%;
  }

  .content_t{
    width: 20%;
    border-right: 1px solid #A8B7C4;
  }

  .content_t:last-child{
    border-right: none;
  }

  .content_img{
    width: 70%;
  }
`;
