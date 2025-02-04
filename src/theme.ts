import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", 
    },
    secondary: {
      main: "#D32F2F", 
    },
    background: {
      default: "#FFFFFF", 
      paper: "#F5F5F5", 
    },
    text: {
      primary: "#000000", 
      secondary: "#D32F2F", 
    },
    action: {
      hover: "#B71C1C", 
      selected: "#FF5252",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#B71C1C", 
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", 
          color: "#FFFFFF", 
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF", 
        },
      },
    },
  },
});

export default theme;
