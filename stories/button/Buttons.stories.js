// file: src/Button.js

import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  select,
  radios,
  boolean
} from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";

import theme from "../../dev/theme";
import Button from "../../src/Button";

storiesOf("Styled Components | Buttons", module)
  .addDecorator(withKnobs)
  .add("Basic Button", () => {
    return (
      <div style={{ height: "100%" }}>
        <Button>Basic Button</Button>
        <br />
        <ThemeProvider theme={theme}>
          <Button>Basic Themed Button</Button>
        </ThemeProvider>
      </div>
    );
  })
  .add("Selector Button", () => {
    return (
      <div style={{ height: "100%" }}>
        <ThemeProvider theme={theme}>
          <Button>Basic Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button primary>Primary Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button secondary>Secondary Themed Button</Button>
        </ThemeProvider>
      </div>
    );
  })
  .add("Sized Button", () => {
    return (
      <div style={{ height: "100%" }}>
        <ThemeProvider theme={theme}>
          <Button size="xLarge">Extra Large Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button size="large">Large Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button size="medium">Medium Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button size="small">Small Themed Button</Button>
        </ThemeProvider>
        <br />
        <ThemeProvider theme={theme}>
          <Button size="xSmall">Extra Small Themed Button</Button>
        </ThemeProvider>
      </div>
    );
  })
  .add("Customize Button", () => {
    const buttonText = text("Button Text", "Custom Button Text");

    const sizeLabel = "Size";
    const sizeOptions = {
      XSmall: "xSmall",
      Small: "small",
      Medium: "medium",
      Large: "large",
      XLarge: "xLarge",
      None: null
    };
    const sizeDefault = "xLarge";
    const size = select(sizeLabel, sizeOptions, sizeDefault);

    const selectorLabel = "Selector";
    const selectorOptions = {
      Primary: "primary",
      Secondary: "secondary",
      None: ""
    };
    const selectoryDefault = "";
    const selector = radios(selectorLabel, selectorOptions, selectoryDefault);

    let selectorVal = "";
    if (selector === "primary") {
      selectorVal = { primary: true };
    } else if (selector === "secondary") {
      selectorVal = { secondary: true };
    }

    const themeLabel = "Themed";
    const themeDefaultValue = true;
    const themeValue = boolean(themeLabel, themeDefaultValue);

    if (themeValue) {
      return (
        <div style={{ height: "100%" }}>
          <ThemeProvider theme={theme}>
            <Button {...selectorVal} size={size}>
              {buttonText}
            </Button>
          </ThemeProvider>
          <p>{`<Button ${selector} size='${size}'>${buttonText}</Button>`}</p>
        </div>
      );
    } else {
      return (
        <div style={{ height: "100%" }}>
          <Button>{buttonText}</Button>
          <p>{`<Button>${buttonText}</Button>`}</p>
        </div>
      );
    }
  });
