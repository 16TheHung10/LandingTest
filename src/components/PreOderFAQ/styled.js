import background from "../../assets/images/img-groud-oderpage/backgroudPreoder.png"
import styled from "styled-components";


export const Hero = styled.div`
    background: black;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    min-width: 330px;
    height: fit-content !important;
    .list {
        display: flex;
        flex-direction: column;
        .list_item {
            display: flex;
            flex-direction: row;
            width: 80%;
            margin: auto;
            justify-content: space-between;
            padding-bottom: 2%;
            color: white;
            align-items: center;
            .decs {
                /* font-weight: 600;
                font-size: 20px;
                line-height: 30px; */
            }
            .img_item {
                width: 2%;
            
            }
        }
    }

    .title {
        color: rgba(33, 212, 255, 1);
        padding-bottom: 2%;
        .title_FAQS {
            color: red;
        }
    }
    
@media (max-width: 1280px) {
    .list_item {
        width: 100% !important;
     }
    }
@media screen and (max-width: 46.1875em) {
 .list_item {
    width: 100% !important;
 }

 .decs {
    text-align: left;
 }
}

@media (min-width: 46.25em) and (max-width: 63.9375em) {

}

`;