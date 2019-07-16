import React from "react";
import { createGlobalStyle } from "styled-components";

import Button from "../../src/Button";
import withCustomTheme from "../../src/CustomThemeProvider";
import customTheme from '../newTheme';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colorPallet.darkest};
    font-family: ${props => props.theme.typography.fontFamily};
  }
`;

const MyCustomThemedButton = withCustomTheme(Button, customTheme);
const onClick = () => alert("You Clicked Me!!");

/*
 * Simple application that displays a default themed button
 * (passed viw the parent index.js ThemeProvider) and a second
 * themed button whose theme is customized to overwrite the
 * default theme
 */
const App = () => (
  <div>
    <GlobalStyle />
    <div>
      <label>Provider Themed Button:</label>
      <Button onClick={onClick}>Click Me</Button>
    </div>
    <div>
      <label>XL Sized Provider Themed Button:</label>
      <Button size="xLarge" onClick={onClick}>
        Click Me
      </Button>
    </div>
    <div>
      <label>
        Custom Themed Overwriting Provider Theme (background & color plus hover):
      </label>
      <MyCustomThemedButton onClick={onClick}>Click Me</MyCustomThemedButton>
    </div>
  </div>
);

export default App;
