import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 12px;
    font-family: sans-serif;
    font-size: 112.5%;
    background-color: #FCC8A5;
  }

  input, label, button, textarea {
    font-size: 1em;
  }

`;
