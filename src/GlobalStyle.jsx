import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Coolvetica;
        src:url("/fonts/coolvetica/coolvetica.otf") format("opentype");
    }

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Coolvetica', serif;
        color: white;
        
    }
`;

export default GlobalStyle;