import styled from "styled-components";

type TitleStyledProps = {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
}

export const TitleCard = styled.h1<TitleStyledProps>`
    margin: 20px;
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
`
