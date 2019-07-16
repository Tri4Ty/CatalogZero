import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const theme = {
    button: {
        backgroundColor: '#333147',
        borderColor: '#000',
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "#e4e3e8",
        display: "inline",
        fontSize: "14px",
        fontWeight: "normal",
        margin: "10px",
        outline: "none",
        padding: "5px 10px",
        
        hover: {
            color: '#333147',
            backgroundColor: "#e4e3e8"
        }
    }
}

const ThemedButton = styled.button`
    background-color: ${ (props) => {
        if (props.primary) {
            return props.theme.colors.primary;
        } else if (props.theme && props.theme.button && props.theme.button.backgroundColor) {
            return props.theme.button.backgroundColor;
        } else {
            theme.button.backgroundColor;
        }
    }};
    border-color: ${props => {
        if (props.theme && props.theme.button && props.theme.button.borderColor) {
            return props.theme.button.borderColor;
        } else {
            return theme.button.borderColor;
        }
    }};
    border-radius: ${props => {
        if (props.theme && props.theme.button && props.theme.button.borderRadius) {
            return props.theme.button.borderRadius;
        } else {
            return theme.button.borderRadius;
        }
    }};
    border-width: ${props => {
        if (props.theme && props.theme.button && props.theme.button.borderWidth) {
            return props.theme.button.borderWidth ;
        } else {
            return theme.button.borderWidth;
        }
    }};
    border-style: ${props => {
        if (props.theme && props.theme.button && props.theme.button.borderStyle) {
            return props.theme.button.borderStyle ;
        } else {
            return theme.button.borderStyle;
        }
    }};
    color: ${props => {
        if (props.theme && props.theme.button && props.theme.button.color) {
            return props.theme.button.color ;
        } else {
            return theme.button.color;
        }
    }};
    padding: ${props => {
        if (props.theme && props.theme.button && props.theme.button.padding) {
            return props.theme.button.padding ;
        } else {
            return theme.button.padding;
        }
    }};
    font-size: ${props => {
        if (props.theme && props.theme.button && props.theme.button.fontSize) {
            return props.theme.button.fontSize ;
        } else {
            return theme.button.fontSize;
        }
    }};
    font-weight: ${props => {
        if (props.theme && props.theme.button && props.theme.button.fontWeight) {
            return props.theme.button.fontWeight ;
        } else {
            return theme.button.fontWeight;
        }
    }};
    display: ${props => {
        if (props.theme && props.theme.button && props.theme.button.display) {
            return props.theme.button.display ;
        } else {
            return theme.button.display;
        }
    }};
    margin: ${props => {
        if (props.theme && props.theme.button && props.theme.button.margin) {
            return props.theme.button.margin ;
        } else {
            return theme.button.margin;
        }
    }};

    :hover {
        color: ${props => {
            if (props.theme && 
                props.theme.button && 
                props.theme.button.hover && 
                props.theme.button.hover.color) {
                return props.theme.button.hover.color ;
            } else {
                return theme.button.hover.color;
            }
        }};
        background-color: ${props => {
            if (props.theme && 
                props.theme.button && 
                props.theme.button.hover && 
                props.theme.button.hover.backgroundColor) {
                return props.theme.button.hover.backgroundColor ;
            } else {
                return theme.button.hover.backgroundColor;
            }
        }};
    }
`;

/* 
 * If no ThemeProvider is defined in an ancestor component, or
 * the ThemeProvider is missing attributes from the theme, these
 * default values shall be used
 */
ThemedButton.defaultProps = {
    theme
}

const Button = (props) => (
  <ThemedButton onClick={props.onClick}>{props.children}</ThemedButton>
);
export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};