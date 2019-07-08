import React from "react";
import Button from '../../src/Button';
import ThemeProvider from '../../src/ThemeProvider';

const myCustomTheme = {
    button: {
        backgroundColor: "hotpink",
        borderColor: "yellow",
        color: "aqua"
    }
};

function withCustomTheme(CustomComponent, theme) {
    return function ThemedComponent(props) {
        return (
            <ThemeProvider theme={theme}>
                <CustomComponent {...props} />
            </ThemeProvider>
        );
    }
}
  
const MyNewThemedButton = withCustomTheme(Button, myCustomTheme);

// Simple application that only displays a button
const App = () => (
    <div>
        <Button>Themed Button</Button>
        <MyNewThemedButton>Custom Themed Button</MyNewThemedButton>
    </div>
)

export default App;