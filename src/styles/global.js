import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #000000; 
        --background-style: #202024;
        --background-area-inputs: #121214;
        --background-buttons: #00875F;
        --background-buttons-light: #00B37E;
        --white: #FFFFFF;
        --color-texts: #E1E1E6
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

    //REM - medida, 1rem = font-size = 16px 

    body {
        width: 100vw; 
        display: flex;
        justify-content: center;
        scrollbar-width: none;
        -ms-overflow-style: none;

        background: var(--background); 
        -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar{
        display: none; 
    }

    body, input, textarea, span, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`