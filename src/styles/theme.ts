import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0", // Vibrant purple
      light: "#d05ce3",
      dark: "#6a0080",
    },
    secondary: {
      main: "#ce93d8", // Soft violet
      light: "#ffc4ff",
      dark: "#9c64a6",
    },
    background: {
      default: "#121212", // Deep dark background
      paper: "#1e1e1e", // Slightly lighter for cards/dialogs
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        containedPrimary: {
          boxShadow: "0px 4px 20px rgba(156, 39, 176, 0.5)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "none", // Remove paper texture
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #6a1b9a, #9c27b0)",
        },
      },
    },
  },
});
