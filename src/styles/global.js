import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p, h4 {
    font-family: "Raleway", sans-serif;
  }

  h1, h2, h3 {
    font-family: "Catamaran", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
