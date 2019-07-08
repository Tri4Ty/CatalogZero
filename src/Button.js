import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const ThemedButton = styled.button`
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightest};
    color: ${props => props.theme.colors.secondary};
    border-width: 2px;
    border-style: solid;
    padding: 10px;
    font-size: 24px;
    display: block;
    margin: 5px;

    :hover {
        color: ${props => props.theme.colors.lightest};
        background-color: ${props => props.theme.colors.secondary};
    }
`;

/* 
 * If no ThemeProvider is defined in an ancestor component, or
 * the ThemeProvider is missing attributes from the theme, these
 * default values shall be used
 */
ThemedButton.defaultProps = {
    theme: {
        colors: {
            primary: 'grey',
            secondary: 'black',
            lightest: 'white'
        }
    }
}

const Button = (props) => (
  <ThemedButton onClick={props.onClick}>{props.children}</ThemedButton>
);
export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};