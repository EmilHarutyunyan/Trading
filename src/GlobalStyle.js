import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import-normalize
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #1F1F1F;
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    max-width: 1480px;
    padding: 20px;
  }
`;