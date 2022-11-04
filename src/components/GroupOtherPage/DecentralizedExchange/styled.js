import styled from "styled-components";
import backgroundDecent from   "../../../assets/images/img-groud-oderpage/backgroud1.png"

export const HeroDecentralizedExchange = styled.div`
    background: black;
    .wrap_Hero {
        /* background: black; */
        background-image: url(${backgroundDecent});
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        min-width: 330px;
        display: flex;
        height: 100vh;
        .wrap_DecentralizedExchange {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            width: 80%;
            margin: auto;
            .title {
                width: 40%;
                text-align: left;
                .title_item {
                    color: rgba(33, 212, 255, 1);
                }
    
                .desc {
                    color: rgba(180, 180, 180, 1);
                }
            }
        }

    }

@media (max-width: 46.1875em) {
    .wrap_DecentralizedExchange {
        display: flex;
        flex-direction: row;
        width: 95% !important;
        height: 100%;
        align-items: flex-end !important;
        
    }

    .wrap_Hero {
        background-position: 28% 100%;
    }

    .title {
        width: 100% !important;
        padding-bottom: 5%;
    }
}

@media (min-width: 46.25em) and (max-width: 63.9375em) {

}

`;