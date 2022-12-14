import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import SecurityIcon from "@material-ui/icons/Security";
import FaceIcon from "@material-ui/icons/Face";
import SpeedIcon from "@material-ui/icons/Speed";
import { Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function Home() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.wrapper}>
          <Typography variant="h3" className={classes.bigSpace} color="primary">
            Yeşil Zincir Projesi Nedir?
          </Typography>
          <Typography
            variant="h4"
            className={classes.littleSpace}
            color="black"
          >
            Yeşil zincir, doğaya teknolojinin imkanlarını kullanarak değer
            vermeyi amaçlayan, blokzincir teknolojisi üzerinde çalışan bir
            projedir.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            icon={
              <SecurityIcon
                style={{ fill: "#4360A6", height: "125", width: "125" }}
              />
            }
            title="Güvenli"
            btnTitle="Neden Güvenli?"
          />
          <Grid
            icon={
              <FaceIcon
                style={{ fill: "#449A76", height: "125", width: "125" }}
              />
            }
            title="Kullanıcı Dostu"
            btnTitle="Rehber İçin Tıklayın"
          />
          <Grid
            icon={
              <SpeedIcon
                style={{ fill: "#D05B2D", height: "125", width: "125" }}
              />
            }
            title="Hızlı"
            btnTitle="Neden Hızlı?"
          />
        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
