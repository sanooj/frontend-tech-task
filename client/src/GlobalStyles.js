import { css } from "@emotion/react";

const GlobalStyles = css`
    html,body {
        margin: 0;
        padding: 0;
    },
    
    * {
        box-sizing: border-box;
    },
    
    a {
        color: #000;
    },

    h1{
        font-size:2.4615em; /* 32px */
        line-height:1.125em; /* 36px */
        margin: 0 0 0.5625em;
    },

    h2{
        font-size:1.5385em; /* 20px */
        font-weight:normal;
        line-height:1.8em; /* 36px */
        margin-top:0.9em 0;
    },

    h3{
        font-size: 1.2308em; /* 16px */
        line-height: 1.125em; /* 18px */
        margin-top: 1.125em 0;
    },
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px
    }
`;

export default GlobalStyles;
