const colors = {
    primary: "blue",
    secondary: "red",
    lightest: "lightGrey"
};

const theme = {
    button: {
        backgroundColor: colors.primary,
        borderColor: '#000',
        borderRadius: "15px",
        borderWidth: "2px",
        borderStyle: "solid",
        color: colors.secondary,
        display: "inline",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "10px",
        outline: "none",
        padding: "5px 10px",
        hover: {
            color: colors.primary,
            backgroundColor: colors.secondary
        }
    }
};

export default theme;