import styled from "styled-components";

export const HeroRewardMusic = styled.div`
    background-color: black;
    width: 100%;
    max-width: 100%;
    min-width: 330px;
    .wrap_hero {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto;
        .img_left {
            width: 55%;
            padding-right: 10%;
            .img_item {
                width: 100%;
            }
        }

        .title_right {
            display: flex;
            flex-direction: column;
            text-align: left;
            width: 45%;
            .title_item {
                color: rgba(33, 212, 255, 1);
            }
            .sub_title {
                color: rgba(255, 255, 255, 1);
            }
            .desc {
                color: rgba(180, 180, 180, 1);
            }
        }
    }


    @media (max-width: 46.1875em) {
        .wrap_hero {
            display: flex;
            flex-direction: column;
            width: 100% !important;
        }

        .img_left {
            width: 100% !important;
            padding: unset;
        }

        .title_right {
            width: 100% !important;
            text-align: center;
        }

        .title_item {
            text-align: center;
        }
    }

    @media (min-width: 46.25em) and (max-width: 63.9375em) {

    }
`;