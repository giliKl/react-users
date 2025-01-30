import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5E3C", // חום מוקה כהה
    },
    secondary: {
      main: "#D2B48C", // חום בהיר יותר
    },
    background: {
      default: "#F5EDE0", // רקע בצבע מוקה בהיר
      paper: "#E3D1C4", // רקע קופסאות
    },
    text: {
      primary: "#4A3222", // צבע טקסט כהה
      secondary: "#6D4C41", // חום טיפה בהיר יותר
    },
  },
});

export default theme;
