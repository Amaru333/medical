import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  let theme = createTheme({
    palette: {
      cs: {
        main: "#02bf90",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
