import React from "react";

function Login(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Hesap Oluştur</h1>
          <div className="form-group mt-3">
            <label>Ad</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Adınızı buraya giriniz"
            />
          </div>
          <div className="form-group mt-3">
            <label>Soyad</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Soyadınızı buraya giriniz"
            />
          </div>
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
              placeholder="Şifrenizi buraya giriniz"
            />
          </div>
          <div className="form-group mt-3">
            <label>Şifre Kontrol</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Şifrenizi tekrar giriniz"
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
