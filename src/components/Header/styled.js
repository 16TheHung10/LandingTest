import styled from "styled-components";
import Slash from "../../assets/images/slash.png";

export const HeaderWrapper = styled.div`
  z-index: 999;
  width: 100%;
  min-width: 330px;
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 7.6rem 0 6.4rem;
  /* position: fixed;
  width: 100%; */
  header {
    width: 100%;
    padding: 0 24rem;
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      .nav_icon {
        color: white;
        display: none;
        position: relative;
        .mobile_menu {
          display: flex;
          flex-direction: column;
          background: black;
          padding: 2rem;
          position: absolute;
          right: 0;
          top: 102%;
          z-index: 999;
          width: 40rem;
          button {
            background-color: transparent;
            border: 1px solid white;
            padding: 2rem;
            color: white;
          }
          transition: all 0.5s cubic-bezier(0.2, 0.46, 0.81, 1.41);
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        .nav_item {
          position: relative;
          margin-left: 7rem;
          color: white;
          font-weight: 600;
          .nav_btn {
            background: transparent;
            color: white;
            font-size: 1.9rem;
            font-weight: 600;
            letter-spacing: 1px;
            border: none;
          }
        }
        .active {
          &::after {
            content: "";
            position: absolute;
            background: url(${Slash});
            width: 100%;
            top: 100%;
            left: 0;
            right: 0;
            color: red;
            height: 1rem;
            background-repeat: no-repeat;
            background-size: 27rem;
            width: 101%;
            background-position: center;
          }
        }
      }
    }
    .nav-config {
      display: flex;
      gap: 4rem;
      color: white;
      align-items: center;
      .languages {
        select {
          color: #21d4ff;
          background: transparent;
          border: none;
          font-size: 1.8rem;
        }
        option {
          color: #21d4ff;
          background: transparent;
        }
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .feature {
        cursor: pointer;
      }
    }
  }
  .show_menu {
    transform: scale(1);
  }
  .hide_menu {
    transform: translateY(-200%);
  }

  @media screen and (max-width: 1199px) {
    header {
      padding: 0 2rem;
    }
  }
  @media screen and (max-width: 989px) {
  }
  @media screen and (max-width: 767px) {
    .nav_text {
      display: none;
    }
    header {
      nav {
        .nav_icon {
          display: inline-block;
        }
      }
      .nav-config {
        display: none;
      }
    }
  }
  @media screen and (max-width: 575px) {
  }
`;
