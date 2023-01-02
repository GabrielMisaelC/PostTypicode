import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-size: 100%;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }
`;
 
export default GlobalStyle;