import styled from "styled-components"

interface ContainerProps {
    disable: boolean
    medium: boolean
    full: boolean
}

export const Container = styled.button<ContainerProps>`
    height: ${(props) => (props.medium ? 40 : 60)}px;
    width: ${(props) => (props.full ? "100%" : "130px")};
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: ${(props) =>
        props.disable ? "var(--grey-100)" : "var(--primary-color)"};
    color: ${(props) => (props.disable ? "var(--grey-300)" : "white")};
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    :hover {
        background-color: ${(props) =>
            props.disable ? "var(--grey-300)" : "var(--primary-color-50)"};
        color: ${(props) => (props.disable ? "var(--grey-100)" : "white")};
    }
`
