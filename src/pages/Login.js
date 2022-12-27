import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [formValue, setFormValue] = React.useState({
    firstName:"",
    lastName:"",
    mail:"",
    password:"",
    actionMethod:"",
    result:""
  });
  
  const handleChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...formValue };
    newFormData[fieldName] = fieldValue;

    setFormValue(newFormData);

  }


  const handleSubmit = async() => {
    
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "POST",
      "Content-Type": "application/json",
    }
    
  try {
    formValue.result =  axios.post(`http://localhost:5238/api/Auth/Login?mail=${formValue.mail}.com&password=${formValue.password}`)
  } catch (error) {
    console.log(error)
  } 
}


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" action= {formValue.actionMethod} onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Giriş Yap</h1>
          <div className="form-group mt-3">
            <label>E-posta Adresi</label>
            <input
              type="mail"
              className="form-control mt-1"
              placeholder="E-posta adresini buraya gir"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Şifre</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Şifreni buraya gir"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
                Giriş Yap
              </button>
          </div>
          <Link to={"/Register"} style={{ textDecoration: "none" }}>
            <p className="forgot-password text-right mt-2">Hesap Oluştur</p>
          </Link>
          <Link to={"/Password"} style={{ textDecoration: "none" }}>
            <p className="forgot-password text-right mt-2">Şifremi Unuttum</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
