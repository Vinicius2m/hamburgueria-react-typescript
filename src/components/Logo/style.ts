import styled from "styled-components"
import {LogoProps} from "."

export const Container = styled.div<LogoProps>`
    margin-top: 5px;

    h1 {
        font-size: ${(props) => (props.fs ? `${props.fs}px` : "26px")};
    }

    span {
        font-size: 18px;
        font-weight: bold;
        color: var(--secondary-color);
        margin-left: 10px;
    }
`
