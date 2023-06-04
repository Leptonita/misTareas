import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  /*outline: 1px solid limegreen !important;
  */
}

body {
  background-color: #ffe19f;
 /*  background-image: linear-gradient(120deg, #ffe9b9 0%, #ffe8b6 50%, #ffe5ac 100%); */
  color: rgb(15, 0, 59);
  font-family: "Poppins", sans-serif;
  min-height: 100vh;

  /* Color the border and text with theme.main 
  background-color: ${props => props.theme.main};*/
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text}
}
`

