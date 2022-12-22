import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserTbl from "../components/UserTbl";

const styles = makeStyles({
  layout: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
    fontSize: "18px",
    fontWeight: "500",
  },
});

function Personnel() {
  const classes = styles();

  return (
    <div className="App">
      <div className="parent">
        <h1
          style={{
            width: "100%",
            backgroundColor: "green",
            color: "#FFF",
            textAlign: "left",
          }}
        >
          Görevli Paneli
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
        <h1 style={{ color: "red", fontSize: "45px" }}>Kullanıcılar</h1>
        <UserTbl />
      </div>
    </div>
  );
}

export default Personnel;
