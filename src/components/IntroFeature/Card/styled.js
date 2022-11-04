import styled from "styled-components";
import fullBorder from "../../../assets/images/full.png";

export const CardWrapper = styled.section`
  background: black;
  background-image: url(${fullBorder});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 60rem;
  mix-blend-mode: screen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .item {
    display: flex;
    h3 {
      color: white;
    }
  }
`;
