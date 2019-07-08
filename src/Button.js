import React from "react";
import PropTypes from 'prop-types';

import { ThemeContext } from "./Context";

const style = {
    borderWidth: '2px',
    borderStyle: 'solid',
    padding: '10px',
    fontSize: '24px'
}

const createButtonStyleFromTheme = ({button}) => ({
    borderColor: button.borderColor,
    backgroundColor: button.backgroundColor,
    color: button.color,
    ...style
})

const Button = (props) => (
    <ThemeContext.Consumer>
        {theme => (
            <button style={createButtonStyleFromTheme(theme)}>
                {props.children}
            </button>
        )}
    </ThemeContext.Consumer>
)

export default Button;

Button.propTypes = {
    children: PropTypes.node
};