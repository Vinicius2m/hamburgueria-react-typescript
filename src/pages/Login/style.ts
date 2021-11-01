import styled from "styled-components"

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

        #inputContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`
