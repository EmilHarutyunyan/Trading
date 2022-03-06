import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
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
  .btn-primary {
    cursor: pointer;
    display: block;
    width: 100%;
    background-color: #f39200;
    border: none;
    font-size: 31px;
    line-height: 40px;
    text-transform: capitalize;
    border-radius: 10px;
    font-weight: bold;
    padding: 10px 0;
    a {
      color:inherit
    }
  }
`;