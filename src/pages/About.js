import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

function About() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default About;
