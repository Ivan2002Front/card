import styled from "styled-components";


type ImageCardStyledProps = {
    borderRadius?: string,
    width?: string,
    height?: string,
    src?: string,
    alt?: string,
}

export const StyledImageCard = styled.div<ImageCardStyledProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: 10px;
    align-self: center;
    border-radius: ${props => props.borderRadius};
    background-image: url(${props => props.src});
    background-size: ${props => props.width}, ${props => props.height};
    alt: ${props => props.alt};
`