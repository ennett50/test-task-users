const css = String.raw;
export const device = {
    desktop: 1000,
    tablet: 840,
    mobile: 480
};

export const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: normal;
        color: #06293e;
        -webkit-font-smoothing: antialiased;
    }
    img {
        max-width: 100%;
    }
    a {
        text-decoration: none;
        color: #0d8bff;
        transition: opacity ease-in-out 0.2s;
        &:hover {
            text-decoration: underline;
        }
    }
`;

// Iterate through the sizes and create a media template
export const media = Object.keys(device).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${device[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});
