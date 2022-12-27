import React, { useState, useEffect,Component} from "react";
import axios from "axios";
const qs = require('qs')

const Login = () =>{

  const [formValue, setFormValue] = React.useState({
    firstName:"",
    lastName:"",
    mail:"",
    password:"",
  });
  
  const handleChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
    console.log(formValue.firstName)
  }


  

  const handleSubmit = async() => {
    const registerFormData = new FormData();

    registerFormData.append("firstName",formValue.firstName)
    registerFormData.append("lastName",formValue.lastName)
    registerFormData.append("mail",formValue.mail)
    registerFormData.append("password",formValue.password)



    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "POST",
      "Content-Type": "application/json",
  }

  
  try {
    await axios.post(`http://localhost:5238/api/Auth/Register`,  registerFormData,)
  } catch (error) {
    console.log(error)
  }

}

  
  return (
    <div className="Auth-form-container">
      <form action="/User" className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Hesap Oluştur</h1>
          <div className="form-group mt-3">
            <label>Ad</label>
            <input
              type="firstName"
              className="form-control mt-1"
              placeholder="Adınızı buraya giriniz"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Soyad</label>
            <input
              type="lastName"
              className="form-control mt-1"
              placeholder="Soyadınızı buraya giriniz"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>E-posta Adresi</label>
            <input
              type="mail"
              className="form-control mt-1"
              placeholder="E-posta adresinizi buraya giriniz"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Şifre</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Şifrenizi buraya giriniz"
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Kayıt Ol
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  
}
export default Login;
