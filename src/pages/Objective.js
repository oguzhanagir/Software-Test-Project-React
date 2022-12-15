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

function Objective() {
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
            Vizyonumuz dünyada daha çevreci sistemlerin kullanımının
            yaygınlaşmasını sağlayarak doğayı korumaya katkı sağlamaktır.
          </p>
          <p>
            Misyonumuz ise bu çevreci sistemlerden birini blokzincir teknolojisi
            yardımı ile hayata geçirmektir.
          </p>
        </Typography>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Objective;
