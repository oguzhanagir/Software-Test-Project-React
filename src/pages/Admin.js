import React from "react";
import UserTbl from "../components/UserTbl";
import { makeStyles } from "@material-ui/core";
import PersonnelTbl from "../components/PersonnelTbl";

const styles = makeStyles({
  layout: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    marginTop: "100px",
  },
});

function Admin() {
  const classes = styles();

  return (
    <div className="App">
      <div className={classes.layout}>
        <h1>Görevliler</h1>
        <PersonnelTbl />
        <br></br>
        <h1>Kullanıcılar</h1>
        <UserTbl />
      </div>
    </div>
  );
}

export default Admin;
