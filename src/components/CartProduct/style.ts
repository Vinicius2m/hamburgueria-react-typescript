import styled from "styled-components"

export const CartProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;

    #productContent {
        display: flex;
        gap: 10px;

        #productImage {
            background-color: var(--grey-100);
            border-radius: 5px;
            width: 80px;
            height: 80px;
            display: grid;
            place-items: center;

            img {
                width: 60px;
            }
        }
    }
`
