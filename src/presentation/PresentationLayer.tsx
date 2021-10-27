import React from "react";
import { Main } from "./Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0f171e;
    color: white;
  }

  html {
    overflow-x: hidden;
  }
`;

export function initializePresentationLayer(): React.FC {
  const App: React.FC = () => (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
  return App;
}
