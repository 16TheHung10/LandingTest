import styled from "styled-components";
import btn_img from "../../assets/header/bg_item.png";

export const HeaderWrapper = styled.div`
  z-index: 999;
  background-color: transparent;
  position: fixed;
  width: 100%;

  .content_btn {
    padding: 5px 10px;
    margin-top: 0;
  }

  .active.nav_item .nav_btn{
    background-image: url(${btn_img});
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    color: #21d4ff;
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
          top: 0;
          left: 100%;
          transform: translate(-50%, 50%);
          z-index: 999;
          width: 250px;

          button {
            background-color: transparent;
            border: none;
            padding: 2rem;

            &:hover {
              color: #21d4ff;
            }
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
      }
    }
    .nav-config {
      display: flex;
      gap: 4rem;
      color: #fff;
      align-items: center;

      .languages {
        width: 150px;

        select {
          color: #21d4ff;
          background: transparent;
          border: none;
          font-weight: bold;
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
    visibility: 1;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .hide_menu {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 912px) {
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
