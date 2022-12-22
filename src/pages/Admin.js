import React from "react";
import UserTbl from "../components/UserTbl";
import { makeStyles } from "@material-ui/core";
import PersonnelTbl from "../components/PersonnelTbl";
import { Link } from "react-router-dom";

const styles = makeStyles({
  layout: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
  },
});

function Admin() {
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
          Admin Paneli
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
        <h1 style={{ color: "red" }}>Görevliler</h1>
        <PersonnelTbl />
        <br></br>
        <h1 style={{ color: "red" }}>Kullanıcılar</h1>
        <UserTbl />
      </div>
    </div>
  );
}

export default Admin;
