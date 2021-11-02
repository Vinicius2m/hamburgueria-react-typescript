import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 95px;
    width: 100%;
    max-width: 479px;
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    margin-top: 20px;

    #mainContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
        gap: 15px;

        #iconContainer {
            background-color: var(--primary-color-50);
            border-radius: 5px;
            width: 60px;
            height: 60px;
            display: grid;
            place-content: center;
            font-size: 24px;
            svg {
                color: var(--primary-color);
            }
        }

        p {
            color: var(--grey-300);
            font-size: 14px;
            width: 75%;
            height: 60px;
            line-height: 22px;

            strong {
                color: var(--grey-600);
            }
        }
    }
`
