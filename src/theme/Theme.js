const { createTheme } = require("@mui/material");

const theme = createTheme({
    palette:{
        primary:{
            light:"#63a4ff",
            main:"#1976d2",
            dark: "#004ba0",
            constrastText:"#ecfad8"
        }
    },
});

export default theme;