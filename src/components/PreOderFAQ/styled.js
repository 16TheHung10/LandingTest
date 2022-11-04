import styled from "styled-components";

export const Hero = styled.div`
    max-width: 100%;
    width: 100%;
    height: 100vh;
    .list {
        display: flex;
        flex-direction: column;
        .list_item {
            display: flex;
            flex-direction: row;
            width: 60%;
            margin: auto;
            justify-content: space-between;
            padding-bottom: 2%;
            color: white;
            .decs {
                font-weight: 600;
                font-size: 20px;
                line-height: 30px;
            }

            .img_item {
                width: 3%;
            }
        }
    }

    .title {
        font-weight: 600;
        font-size: 64px;
        line-height: 83.2px;
        color: rgba(33, 212, 255, 1);
        padding-bottom: 2%;
    }
`