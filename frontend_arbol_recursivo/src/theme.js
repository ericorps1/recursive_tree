import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0
        },
        "html, body, #root": {
          color: "white",
          height: "100%",
          background: "linear-gradient(#666666, #000000)"  // Nota cómo se añaden comillas aquí
        },
        ul: {
          listStyle: "none"
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: { verticalAlign: "middle" }
      }
    }
  }
});