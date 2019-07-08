import React from "react";
import { ThemeProvider } from "styled-components";

/*
 * Ability to overwrite a component's default theme 
 * with a custom passed-in theme. This is achieved
 * by having another nested ThemeProvider (this nested
 * ThemeProvider is overwriting the parent ThemeProvider
 * defined in index.js). The ThemeProvider is pulled from 
 * 'styled-components' library
 */
export default function withCustomTheme(Component, customTheme) {
    return function CustomThemedComponent(props) {
        return (
            <ThemeProvider theme={customTheme}>
                <Component {...props} />
            </ThemeProvider>
        );
    }
}
