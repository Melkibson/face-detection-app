import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Coolvetica;
        src:url("/fonts/coolvetica/coolvetica.otf") format("opentype");
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Coolvetica', serif;
        background-image: linear-gradient(to right, #434343 0%, black 100%);
        color: white;
        
    }
`;

export default GlobalStyle;