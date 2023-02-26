import styled, { css } from "styled-components";

export const Title = styled.h1`
    font-size: 3rem;
    color: blue;
    font-weight: bold;
    text-decoration: underline;

    ${props => props.theme === 'dark' && css`
        color: white;
        background-color: black;
        `}
`

