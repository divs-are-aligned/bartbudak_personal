import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f5f5f5"
    },
    secondary: {
      main: "#3a4660"
    }
  },
  typography: {
    fontFamily: "Futura",
    useNextVariants: true
  }
});

export default theme;
