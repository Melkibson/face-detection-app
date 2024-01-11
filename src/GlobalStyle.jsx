import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Coolvetica;
        src:url("/fonts/coolvetica/coolvetica.otf") format("opentype");
    }
    @font-face {
        font-family: CoolveticaRg;
        src:url("/fonts/coolvetica/coolveticaRg.otf") format("opentype");
    }

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Coolvetica', serif;
        color: white;
        
    }
    input[type="checkbox"] {
        margin:0 0.5rem 0 0;
    }
`;

export default GlobalStyle;