import styled from "styled-components";
import Slash from "../../assets/images/slash.png";

export const HeaderWrapper = styled.div`
  z-index: 999;
  background-color: transparent;
  position: fixed;
  width: 100%;

  .content_btn {
    padding: 5px 10px;
    margin-top: 0;
  }

  header {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    nav {
      .nav_icon {
        color: #fff;
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
            border: 1px solid #fff;
            padding: 2rem;
            color: #fff;
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
          color: #fff;
          font-weight: 600;
          .nav_btn {
            background: transparent;
            color: #fff;
            font-weight: 600;
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
      color: #fff;
      align-items: center;

      .languages {
        select {
          color: #21d4ff;
          background: transparent;
          border: none;
          font-weight: bold;
          padding: 5px 25px;
          repeat: none;
        }

        option {
          color: #ffff;
          font-weight: bold;
          background: black;
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
`;
