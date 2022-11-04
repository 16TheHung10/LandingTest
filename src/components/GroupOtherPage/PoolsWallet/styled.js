import styled from "styled-components"

export const HeroPoolsWallet = styled.div`
    background: black;
    width: 100%;
    max-width: 100%;
    min-width: 330px;
    .wrap_hero {
        width: 80%;
        margin: auto;
        display: flex;
        .img_phone {
        }
        .title_phone {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-evenly;
            .title_phone_item {
                display: block;
                text-align: left;
                padding-left: 10%;
                .sub_title {
                    color: rgba(255, 255, 255, 1);
                }

                .title_phone_item_inline {
                    color: #21D4FF;
                }

                .derc {
                    color: #B4B4B4;
                }
            }

            .something {
                display: flex;
                flex-direction: column;
                width: 100%;
                .something_top {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }

                .something_bottom {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }

@media (max-width: 46.1875em) {
    .wrap_hero {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding-top: 10%;
    }

    .img_item {
        width: 70%;
    }

    .title_phone {
        width: 100%;
    }

    .title_phone_item {
        padding-left: unset !important;
    }

    .sub_title {
        text-align: center;
    }

    .title_phone_item_inline {
        text-align: center;
    }

    .something {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .something_top {
        display: flex;
        flex-direction: column;
        align-items:center;

    }

    .something_bottom {
        display: flex;
        flex-direction: column;
        width: 90%;
        align-items:center;
    }

    .img_phone_background {
        width: 100%;
    }
}

@media (min-width: 46.25em) and (max-width: 80em) {
    .wrap_hero {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding-top: 10%;
    }

    .img_item {
        width: 70%;
    }

    .title_phone {
        width: 100%;
    }

    .title_phone_item {
        padding: unset;
    }

    .sub_title {
        text-align: center;
    }

    .title_phone_item_inline {
        text-align: center;
    }

    .something {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .something_top {
        display: flex;
        flex-direction: column;
        align-items:center;

    }

    .something_bottom {
        display: flex;
        flex-direction: column;
        width: 90%;
        align-items:center;
    }

    .img_phone_background {
        width: 100%;
    }
}
`; 