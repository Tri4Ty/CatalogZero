import React, { Component } from "react";
import PropTypes from 'prop-types';

import { ThemeContext } from "./Context";

class ThemeProvider extends Component {
    render() {
        return (
            <ThemeContext.Provider value={this.props.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;

ThemeProvider.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.element
};