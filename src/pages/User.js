import React, { useState, Fragment,useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TransferTable from "../components/TransferTable";
import axios from "axios";

  

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

function User() {
  const classes = styles();
  const [balances, setBalances] = useState([]);
  const [users, setUser] = useState([]);
  

  useEffect(()=>{
    const fetchBalance = async ()=> {
      const responseBalance = await axios.get("http://localhost:5238/api/Balance/GetBalance?id=1",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setBalances(responseBalance.data);
    }
    fetchBalance();

    const fetchUser = async ()=> {
      const responseUser = await axios.get("http://localhost:5238/api/User/1",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setUser(responseUser.data);
    }
    fetchUser();



  },[]);



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
        <h2 style={{ color: "red", fontSize: "45px" }}>Hesap Bilgilerim</h2>
        <h3>Ad: {users.firstName}</h3>
        <h3>Soyad: {users.lastName}</h3>
        <h3>Hesaptaki RCY miktarı : {balances}</h3>
        <h2 style={{ color: "red", fontSize: "45px" }}>Para Transferi Yap</h2>
        <TransferTable />
      </div>
    </div>
  );
}

export default User;
