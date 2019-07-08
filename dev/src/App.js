import React from "react";

import Button from '../../src/Button';
import withCustomTheme from '../../src/CustomThemeProvider';

const myCustomTheme = {
    colors: {
        primary: "green",
        secondary: "pink",
        lightest: "yellow"
    }
};

const myCustomThemeOnlyPrimary = {
    colors: {
        primary: "purple",
        lightest: "white"
    }
};
  
const MyCustomThemedButton = withCustomTheme(Button, myCustomTheme);
const MyCustomThemedButtonMissingProperties = withCustomTheme(Button, myCustomThemeOnlyPrimary);
const onClick = () => alert("You Clicked Me!!");

/*
 * Simple application that displays a default themed button 
 * (passed viw the parent index.js ThemeProvider) and a second 
 * themed button whose theme is customized to overwrite the 
 * default theme
 */
const App = () => (
    <div>
        <Button onClick={onClick}>Themed Button</Button>
        <MyCustomThemedButton onClick={onClick}>Custom Themed Button</MyCustomThemedButton>
        <MyCustomThemedButtonMissingProperties onClick={onClick}>
            Themed With Border & Background Color Defined
        </MyCustomThemedButtonMissingProperties>
    </div>
)

export default App;