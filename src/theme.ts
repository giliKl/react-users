import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // שחור - צבע ה-AppBar והאלמנטים המרכזיים
    },
    secondary: {
      main: "#D32F2F", // אדום כהה
    },
    background: {
      default: "#FFFFFF", // רקע לבן
      paper: "#F5F5F5", // רקע מעט אפרפר למודלים וקופסאות
    },
    text: {
      primary: "#000000", // טקסט ראשי בצבע שחור
      secondary: "#D32F2F", // טקסט משני בצבע אדום כהה
    },
    action: {
      hover: "#B71C1C", // אדום כהה יותר לריחוף
      selected: "#FF5252", // אדום בהיר לכפתור פעיל
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // כפתור אדום
          color: "#FFFFFF", // טקסט לבן
          "&:hover": {
            backgroundColor: "#B71C1C", // אדום כהה יותר בעת ריחוף
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // AppBar שחור
          color: "#FFFFFF", // טקסט לבן ב-AppBar
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF", // מודלים לבנים
        },
      },
    },
  },
});

export default theme;
