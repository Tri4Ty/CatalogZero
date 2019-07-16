import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import theme from "../theme";

import App from "./App";
import Button from "../../src/Button";
import withCustomTheme from "../../src/CustomThemeProvider";

const myCustomThemeMissingProps = {
  button: {
    backgroundColor: "orange",
    color: "black"
  }
};
const MyCustomThemedButtonMissingProperties = withCustomTheme(
  Button,
  myCustomThemeMissingProps
);

ReactDOM.render(
  <div>
    <label>Default Button (No Theme):</label>
    <Button>Button</Button>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <label>
      Custom Theme (only color & background defined ... default hover)
    </label>
    <MyCustomThemedButtonMissingProperties>
      Button
    </MyCustomThemedButtonMissingProperties>
  </div>,
  document.getElementById("app")
);
