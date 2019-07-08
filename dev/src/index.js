import React from 'react';
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import theme from 'theme';

import App from './App'
import Button from '../../src/Button';
 
ReactDOM.render(
    <div>
        <Button>Default Themed Button</Button>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </div>,
    document.getElementById("app")
);