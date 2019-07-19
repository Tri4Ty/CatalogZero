const colorPallet = {
  primary: "#333147",
  secondary: "#e4e3e8",
  tertiary: "darkGrey",
  lightest: "white",
  darkest: "black"
};

const typography = {
  fontFamily: "Arial, Helvetica, sans-serif",
  sizes: {
    xSmall: "8px",
    small: "12px",
    medium: "16px",
    large: "20px",
    xLarge: "24px"
  }
};

const theme = {
  button: {
    backgroundColor: colorPallet.darkest,
    borderColor: "#000",
    borderRadius: "5px",
    borderWidth: "1px",
    borderStyle: "solid",
    color: colorPallet.lightest,
    display: "inline",
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.medium,
    fontWeight: "normal",
    margin: "5px",
    outline: "none",
    padding: "5px 10px",

    hover: {
      color: colorPallet.darkest,
      backgroundColor: colorPallet.lightest,
      cursor: "pointer"
    },

    focus: {
      outline: "none"
    },

    active: {
      color: colorPallet.darkest,
      backgroundColor: colorPallet.tertiary
    }
  },
  typography: typography,
  colorPallet: colorPallet
};

export default theme;
