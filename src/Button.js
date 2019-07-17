import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ThemedButton = styled.button`
  background-color: ${props => {
    if (props.primary) {
      return props.theme.colors.primary;
    } else if (
      props.theme &&
      props.theme.button &&
      props.theme.button.backgroundColor
    ) {
      return props.theme.button.backgroundColor;
    }
  }};
  border-color: ${props => {
    if (props.theme && props.theme.button && props.theme.button.borderColor) {
      return props.theme.button.borderColor;
    }
  }};
  border-radius: ${props => {
    if (props.theme && props.theme.button && props.theme.button.borderRadius) {
      return props.theme.button.borderRadius;
    }
  }};
  border-width: ${props => {
    if (props.theme && props.theme.button && props.theme.button.borderWidth) {
      return props.theme.button.borderWidth;
    }
  }};
  border-style: ${props => {
    if (props.theme && props.theme.button && props.theme.button.borderStyle) {
      return props.theme.button.borderStyle;
    }
  }};
  color: ${props => {
    if (props.theme && props.theme.button && props.theme.button.color) {
      return props.theme.button.color;
    }
  }};
  padding: ${props => {
    if (props.theme && props.theme.button && props.theme.button.padding) {
      return props.theme.button.padding;
    }
  }};
  font-family: ${props => {
    if (props.theme && props.theme.button && props.theme.button.fontFamily) {
      return props.theme.button.fontFamily;
    }
  }};
  font-size: ${props => {
    if (props.size) {
      return props["theme"]["typography"]["sizes"][props.size];
    } else if (
      props.theme &&
      props.theme.button &&
      props.theme.button.fontSize
    ) {
      return props.theme.button.fontSize;
    }
  }};
  font-weight: ${props => {
    if (props.theme && props.theme.button && props.theme.button.fontWeight) {
      return props.theme.button.fontWeight;
    }
  }};
  display: ${props => {
    if (props.theme && props.theme.button && props.theme.button.display) {
      return props.theme.button.display;
    }
  }};
  margin: ${props => {
    if (props.theme && props.theme.button && props.theme.button.margin) {
      return props.theme.button.margin;
    }
  }};

  :hover {
    color: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.hover &&
        props.theme.button.hover.color
      ) {
        return props.theme.button.hover.color;
      }
    }};
    background-color: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.hover &&
        props.theme.button.hover.backgroundColor
      ) {
        return props.theme.button.hover.backgroundColor;
      }
    }};
    cursor: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.hover &&
        props.theme.button.hover.cursor
      ) {
        return props.theme.button.hover.cursor;
      }
    }};
  }

  :focus {
    outline: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.focus &&
        props.theme.button.focus.outline
      ) {
        return props.theme.button.focus.outline;
      }
    }};
  }

  :active {
    color: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.active &&
        props.theme.button.active.color
      ) {
        return props.theme.button.active.color;
      }
    }};
    background-color: ${props => {
      if (
        props.theme &&
        props.theme.button &&
        props.theme.button.active &&
        props.theme.button.active.backgroundColor
      ) {
        return props.theme.button.active.backgroundColor;
      }
    }};
  }
`;

const Button = props => (
  <ThemedButton size={props.size} onClick={props.onClick}>
    {props.children}
  </ThemedButton>
);
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string
};
