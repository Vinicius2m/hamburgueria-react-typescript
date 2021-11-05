import styled from "styled-components"

export const CartModalDiv = styled.div`
    width: 310px;
    min-height: 260px;
    background-color: white;
    border-radius: 5px;

    #modalHeader {
        background-color: var(--primary-color);
        width: 100%;
        height: 55px;
        border-radius: 5px 5px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;

        h4 {
            color: white;
        }

        #closeIcon {
            display: flex;

            svg {
                font-size: 22px;
                color: var(--primary-color-50);
            }
        }
    }

    #modalContent {
        height: 255px;
        overflow-y: auto;
    }

    #total {
        padding: 20px;
        display: flex;
        flex-direction: column;

        #hr {
            border-top: 2px solid var(--grey-100);
            margin: 18px 0;
        }

        #totalContent {
            display: flex;
            justify-content: space-between;
            margin-bottom: 18px;

            p {
                color: var(--grey-600);
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
            }

            span {
                color: var(--grey-300);
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }

    #emptyCart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 205px;
        gap: 10px;
    }

    @media screen and (min-width: 768px) {
        width: 500px;
    }
`
