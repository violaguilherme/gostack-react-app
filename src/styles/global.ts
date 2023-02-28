import { createGlobalStyle } from "styled-components"

import githubBackground from "../assets/githubBackground.svg"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    #root {
        max-width: 96rem;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    body {
        background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    }

    body, input, button {
        font: 1.6rem Roboto, sans-serif;
    }
    
    button {
        cursor: pointer;
    }

    @media (max-width: 650px) {
        :root {
            font-size: 50%;
        }
    }

`