import styled from "styled-components"

type StyledCardProps = {
    color?: string,
    borderRadius?: string,
    width?: string,
    height?: string,
    boxShadow?: string,
}

export const StyledCard = styled.div<StyledCardProps>`
    width: ${props => props.width};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    box-shadow: ${props => props.boxShadow};
`
