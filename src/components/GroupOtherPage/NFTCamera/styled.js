import styled from  "styled-components"
import backgroundCamera from "../../../assets/images/img-groud-oderpage/background2.png"

export const HeroCamera = styled.div`
    background: black;
    min-width: 330px;
    .wrap_camera {
        background-image: url(${backgroundCamera});
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        display: flex;
        height: 100vh;
        width: 80%;
        .title_camera {
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: left;
            align-items: flex-end;
            justify-content: center;
            .title_item {
                color: #21D4FF;
                width: 40%;
            }

            .derc {
                color: #B4B4B4;
                width: 40%;
            }
        }
    }

@media (max-width: 46.1875em) {
    .title_camera {
        text-align: center !important;
        display: flex;
        align-items: center !important ;
        justify-content: flex-end !important;
    }

    .title_item {
        width: 100% !important;
    }

    .derc {
        width: 100% !important;
    }

    .wrap_camera {
        background-size: contain;
        margin: auto;
    }
}

@media (min-width: 46.25em) and (max-width: 63.9375em) {

}

`;