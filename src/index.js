import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import SimpleReactLightbox from "simple-react-lightbox";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: "#fff";
    color: "#141414";
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  a {
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    @media (max-width: 1215px) {
      font-size: 70%;
    }
  }
`;

const theme = {
  primary: "#c9a96a",
  secondary: "#d9ccb8",
  textPrimary: `"Playfair Display", serif`,
  navHeight: "3.5rem",
};

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <SimpleReactLightbox>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </Router>
      </SimpleReactLightbox>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
