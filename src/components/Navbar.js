import React from "react";
import LoginBtn from "./LoginBtn";
import logo from "../logo.svg";
import logoMobile from "../logoMobile.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#9EDFCE",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "6%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function Navbar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img src={logo} className={classes.logo} />
      <img src={logoMobile} className={classes.logoMobile} />
      <Typography variant="h4" className={classes.menuItem}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Yeşil Zincir
        </Link>
      </Typography>
      <Typography variant="h4" className={classes.menuItem}>
        <Link to={"/Objective"} style={{ textDecoration: "none" }}>
          Vizyon ve Misyon
        </Link>
      </Typography>
      <Typography variant="h4" className={classes.menuItem}>
        <Link to={"/About"} style={{ textDecoration: "none" }}>
          Hakkımızda
        </Link>
      </Typography>
      <Typography variant="h4" className={classes.menuItem}>
        <Link to={"/Contact"} style={{ textDecoration: "none" }}>
          Bize Ulaşın
        </Link>
      </Typography>
      <LoginBtn txt="Giriş Yap" />
    </Toolbar>
  );
}

export default Navbar;
