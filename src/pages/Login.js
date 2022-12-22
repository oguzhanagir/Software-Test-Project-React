import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Giriş Yap</h1>
          <div className="form-group mt-3">
            <label>E-posta Adresi</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="E-posta adresini buraya gir"
            />
          </div>
          <div className="form-group mt-3">
            <label>Şifre</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Şifreni buraya gir"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link
              to={"/Personnel"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <button type="submit" className="btn btn-primary">
                Giriş Yap
              </button>
            </Link>
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
