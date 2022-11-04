import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  padding-top: 0;
  .title {
    color: #21d4ff;
  }
  .form {
    width: 70%;
    margin: auto;
    color: white;
    margin-top: 10rem;
    .row {
      display: flex;
      margin-bottom: 5rem;
      justify-content: center;
      gap: 4rem;
      button {
        background-color: transparent;
        padding: 1rem 5rem;
        color: white;
        border: 1px solid white;
      }
    }
    input,
    textarea {
      border: none;
      border-bottom: 1px solid white;
      background-color: transparent;
      width: 100%;
      padding: 1rem 1rem;
      color: white;
    }
    textarea {
      border: 1px solid white;
      height: 30rem;
    }
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 575px) {
    .row {
      flex-direction: column;
    }
  }
`;
