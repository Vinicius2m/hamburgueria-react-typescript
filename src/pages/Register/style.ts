import styled from "styled-components"

export const MainRegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    #box {
        display: flex;
        flex-direction: column;

        img {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        gap: 60px;

        #box {
            width: 375px;
            min-width: 292px;

            img {
                width: 180px;
                height: 80px;
                margin-top: 30px;
                display: block;
            }
        }
    }
`
