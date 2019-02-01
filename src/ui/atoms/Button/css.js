import styled, { keyframes } from "styled-components";
import theme from "./theme";

const bounce = keyframes`
    0%, 100% {
        transform: scale(0.0);
    }
    50% {
        transform: scale(1.0);
    }

`;
const ButtonDefault = styled.button`
    position: relative;
    border: 0;
    color: #fff;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    transition: opacity ease-in-out 0.2s;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 15px;
    font-size: 16px;
    min-width: 100px;
    &[disabled] {
        color: ${(props) => (props.loading ? "#c5caca" : "inherit")};
        cursor: default;
        background: #c5caca !important;
        &:before,
        &:after {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            content: "";
            display: ${(props) => (props.loading ? "block" : "none")};
            animation: ${bounce} 2s infinite ease-in-out;
        }
        &:after {
            animation-delay: -1s;
        }
    }

    &:hover {
        opacity: 0.85;
    }
    ${(props) => {
        const { size, kind = "default" } = props;

        let sizeStyle = "";
        let typeStyle = "";
        const sizeTheme = theme.size[size];
        const typeTheme = theme.kind[kind];
        for (const sizeItem in sizeTheme) {
            if (Object.prototype.hasOwnProperty.call(sizeTheme, sizeItem)) {
                sizeStyle += `${sizeItem}: ${sizeTheme[sizeItem]};`;
            }
        }
        for (const typeItem in typeTheme) {
            if (Object.prototype.hasOwnProperty.call(typeTheme, typeItem)) {
                typeStyle += `${typeItem}: ${typeTheme[typeItem]};`;
            }
        }
        return typeStyle + sizeStyle;
    }};
`;

export default ButtonDefault;
