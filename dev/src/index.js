import React from 'react';
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import theme from 'theme';

import App from './App'
import Button from '../../src/Button';
import withCustomTheme from '../../src/CustomThemeProvider';

const myCustomThemeMissingProps = {
    colors: {
        lightest: "purple",
        secondary: "white"
    }
};
const MyCustomThemedButtonMissingProperties = withCustomTheme(Button, myCustomThemeMissingProps);

ReactDOM.render(
    <div>
        <Button>Default Button (No Theme)</Button>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
        <MyCustomThemedButtonMissingProperties>
            Themed With Only Text & Background Color Defined
        </MyCustomThemedButtonMissingProperties>
   </div>,
    document.getElementById("app")
);