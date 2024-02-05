import styled from "styled-components";
import {css} from "styled-components";

type CardButtonStyledProps = {
    color?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
    backgroundColor?: string;
    borderRadius?: string;
    btnType: "primary" | "secondary"
}

export const CardButton = styled.button<CardButtonStyledProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    border-radius: ${props => props.borderRadius};
    border: none;
    margin: 20px;
    cursor: pointer;

    ${props => props.btnType === "primary" && css<CardButtonStyledProps>`
        border: 2px solid #4e71fe;
        color: #fff;
        border-radius: 5px;
        background-color: #4e71fe;
        width: 86px;
        height: 30px;
    `}

    ${props => props.btnType === "secondary" && css<CardButtonStyledProps>`
        border: 2px solid #4e71fe;
        color: #4e71fe;
        border-radius: 5px;
        background-color: transparent;
        width: 86px;
        height: 30px;
        margin: 20px 0 20px 0;
    `}
`