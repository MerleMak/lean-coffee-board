import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 12px;
    font-family: Abril Fatface;
    font-size: 112.5%;
    background-color: #EFF6E0
  }

  input, label, button, textarea {
    font-size: 1em;
  }

`;
