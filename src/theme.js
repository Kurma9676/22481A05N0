import { createTheme } from "@mui/material/styles";

// You can switch between light and dark by changing the `mode`
const theme = createTheme({
  palette: {
    mode: "light", // Change to 'dark' for dark mode
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#9c27b0", // Purple
    },
    error: {
      main: "#f44336", // Red
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // Avoid uppercase buttons
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
