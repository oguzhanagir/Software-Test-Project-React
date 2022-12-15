import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@material-ui/core";

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
        <Typography
          variant="h4"
          style={{ marginLeft: "100px", marginRight: "100px" }}
        >
          <br></br>
          <p>
            Yeşil zincir projesinin geliştirilmesinden Manisa Celal Bayar
            Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi
            öğrencilerinden oluşan bir ekip sorumludur.
          </p>
        </Typography>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default About;
