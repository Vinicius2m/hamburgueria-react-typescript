import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    height: 400px;
    border: 2px solid var(--white);
    border-radius: 5px;

    div {
        align-self: center;
        margin-bottom: 25px;
        width: 100%;
        display: grid;
        place-items: center;
        background-color: var(--white);

        img {
            width: 200px;
            height: 170px;
            background-size: cover;
        }
    }

    h3 {
        margin: 0 20px;
    }

    p:first-of-type {
        font-size: 12px;
        line-height: 16px;
        color: var(--grey-300);
        margin: 15px 20px;
    }

    p:last-of-type {
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        color: var(--primary-color);
        margin: 0 20px 15px 20px;
    }

    button {
        margin: 0 20px;
    }
`
