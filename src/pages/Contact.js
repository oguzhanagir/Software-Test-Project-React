import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@material-ui/core";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Grid from "../components/Grid";

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

function Contact() {
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
            <Grid
              icon={
                <ContactSupportIcon
                  style={{ fill: "#4360A6", height: "125", width: "125" }}
                />
              }
              title="Bize Ulaşın"
              btnTitle="Bize Ulaşmak İçin Tıklayın"
            />
          </p>
        </Typography>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Contact;
