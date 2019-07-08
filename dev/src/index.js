import React from 'react';
import ReactDOM from "react-dom";

import theme from 'theme';

import ThemeProvider from '../../src/ThemeProvider';
import App from './App'
 
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("app")
);