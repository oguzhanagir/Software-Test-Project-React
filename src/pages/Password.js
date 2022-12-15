import React from "react";

function Login(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Şifremi Unuttum</h1>
          <div className="form-group mt-3">
            <label>E-posta Adresi</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="E-posta adresini buraya gir"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <br></br>
            <button type="submit" className="btn btn-primary">
              Şifremi E-posta adresime gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
