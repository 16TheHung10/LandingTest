import styled from "styled-components";
import PhoneImage from "../../assets/images/referral_phome_img.png";
import SlashBg from "../../assets/images/referral-slash.png";
import border from "../../assets/images/border-referral.png";

export const ReferralWrapper = styled.div`
  min-width: 330px;
  background-color: black;
  color: white;
  overflow-x: hidden;
  .header {
    text-align: left;
    position: relative;
    z-index: 1;
    /* height: 100rem; */
    aspect-ratio: 2/1;
    display: flex;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      background-image: url(${PhoneImage});
      background-position: right;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: 0;
      transform: translateX(25%);
    }
    .content-top {
      width: 60%;
    }
    h1 {
      text-align: left;
    }
    p {
      text-align: left;
    }
    .card {
      background-image: url(${border});
      background-repeat: no-repeat;
      margin-top: 5rem;
      background-size: 100% 100%;
      width: 70rem;
      height: 18rem;
      mix-blend-mode: screen;
      display: flex;
      flex-direction: column;
      text-align: justify;
      justify-content: center;
      align-items: baseline;
      padding: 2rem;
      padding-bottom: 4rem;
      p {
        width: 60%;
      }
    }
  }
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    /* .card_item {
      flex-basis: 54rem;
    } */
  }
  .slash {
    display: flex;
    justify-content: space-evenly;
    background-image: url(${SlashBg});
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    height: 91rem;
    align-items: center;
    .card {
      width: 40%;
      display: flex;
      flex-direction: column;
      height: 30rem;
      img {
        margin-bottom: 1rem;
        width: 10%;
        margin: auto;
      }
      p {
        flex: 1;
      }
    }
  }
  .end {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 30%;
      text-align: left;
    }
    .card {
    }
    img {
      width: 50%;
      flex: 1;
    }
  }

  @media screen and (max-width: 1199px) {
    .cards {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
    .header {
      .content-top {
        width: 100%;
        .card {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .header {
      aspect-ratio: 1/1;
      &::after {
        transform: scale(1);
      }
    }
    .slash {
      flex-direction: column;
      .card {
        width: 100%;
      }
    }
    .end {
      flex-direction: column;
      .content {
        width: 100%;
        text-align: center;
      }
      .card {
        margin-bottom: 2rem;
      }
      img {
        width: 100%;
        flex: 1;
      }
    }
  }
`;
