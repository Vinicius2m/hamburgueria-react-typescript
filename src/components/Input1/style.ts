import styled from "styled-components"

export const Inputs = styled.div`
    position: relative;

    input {
        border: 2px solid transparent;
        border-radius: 8px;
        background-color: var(--white);
        width: 100%;
        height: 60px;
        padding-left: 10px;
        transition: 0.2s ease-out;
        font-size: 16px;
        font-weight: 400;

        :focus {
            border: 2px solid var(--grey-600);
            background-color: white;
        }
    }

    label {
        border-radius: 8px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        color: var(--grey-300);
        padding: 0 5px;
        margin: 0 0.5rem;
        transition: 0.2s ease-out;
        transform-origin: left top;
    }

    input:focus + label {
        top: 0;
        background-color: white;
        transform: translateY(-50%) scale(0.9);
    }

    input:not(:placeholder-shown) + label {
        transform: translateY(-50%) scale(0.9);
        top: 0;
    }
`
