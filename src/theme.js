import React from "react";
import PropTypes from 'prop-types';

const theme = {
    button: {
        backgroundColor: 'white',
        borderColor: 'red',
        color: 'blue'
    }
}

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

const buttonStyle = createButtonStyleFromTheme(theme)

const Button = (props) => (
    <button style={buttonStyle}>{props.children}</button>
)

export default Button;

Button.propTypes = {
    children: PropTypes.object
};