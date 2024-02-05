import styled from "styled-components";

type SubtitleStyledProps = {
    fontSize?: string
    fontFamily?: string
    fontWeight?: string
    color?: string
    lineHeight?: string
}

export const SubtitleCard = styled.p<SubtitleStyledProps>`
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    margin: 0 20px 0 20px;
    line-height: ${props => props.lineHeight};
`