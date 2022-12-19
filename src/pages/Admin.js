import React from "react";
import UserTbl from "../components/UserTbl";
import { makeStyles } from "@material-ui/core";

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
        <UserTbl />
      </div>
    </div>
  );
}

export default Admin;
