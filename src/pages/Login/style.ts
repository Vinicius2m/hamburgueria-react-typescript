import styled from "styled-components"

export const MainLoginContainer = styled.div`
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
        flex-direction: row-reverse;
        justify-content: center;
        gap: 60px;

        #box {
            width: 375px;

            img {
                width: 180px;
                height: 80px;
                margin-top: 30px;
            }
        }
    }
`

export const LoginContainer = styled.div`
    margin-top: 14px;
    border: 2px solid var(--white);
    border-radius: 5px;
    max-width: 500px;

    #loginContent {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px auto;

        .inputsContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .inputContainer {
            height: 85px;
            display: flex;
            flex-direction: column;
        }

        p {
            text-align: center;
            color: grey;
        }
    }

    @media screen and (min-width: 1024px) {
    }
`
