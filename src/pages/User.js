import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TransferTable from "../components/TransferTable";

const styles = makeStyles({
  layout: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
  },
});

function User() {
  const classes = styles();

  return (
    <div className="App">
      <div className="parent">
        <h1
          style={{
            width: "100%",
            backgroundColor: "lightBlue",
            textAlign: "left",
          }}
        >
          Kullanıcı Paneli
        </h1>
        <Link to={"/"} style={{ textDecoration: "none", color: "#FFF" }}>
          <button
            style={{ width: "200px", height: "48px" }}
            type="submit"
            className="btn btn-primary"
          >
            Çıkış Yap
          </button>
        </Link>
      </div>
      <div className={classes.layout}>
        <h3 style={{ color: "red", fontSize: "35px" }}>Para Transferi Yap</h3>
        <TransferTable />
      </div>
    </div>
  );
}

export default User;
