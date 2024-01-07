import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #EBECF0;
    font-family: 'SUIT', sans-serif;
  }
  button {
    border: none;
  }
`;

export default GlobalStyles;
