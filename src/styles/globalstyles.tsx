import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'DM sans', cursive;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    background-color: black;
  }

  main {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 50px 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
