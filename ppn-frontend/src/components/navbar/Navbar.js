import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  // state
  const [languageList, setLanguageList] = useState("");
  const [formLogin, setFormLogin] = useState("");
  const [navbar, setNavbar] = useState("");

  const [loginFormData, setFormLoginData] = useState({
    email: "",
    password: "",
  });

  // context
  const {
    authState: { user },
    loginUser,
    logoutUser,
  } = useContext(AuthContext);

  const { email, password } = loginFormData;

  const handleShowLanguageListClick = () => {
    languageList === "" ? setLanguageList("active") : setLanguageList("");
  };
  const handleShowFormClick = () => {
    formLogin === "" ? setFormLogin("active") : setFormLogin("");
  };

  const handleShowNavBar = () => {
    navbar === "" ? setNavbar("active") : setNavbar("");
  };

  const onChangeLoginForm = (e) => {
    setFormLoginData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    await loginUser(loginFormData);
    setFormLogin("");
    setFormLoginData({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    const languageListTimeout = setTimeout(() => {
      setLanguageList("");
    }, 5000);

    return () => {
      clearTimeout(languageListTimeout);
    };
  });

  return (
    <header className="header active">
      <Link to="/" className="logo">
        {" "}
        <img src="./images/logo.png" alt="" />
      </Link>
      <div className="header__right">
        <div className="header__right-top">
          <div className="header__hotline">
            <span>Hotline: </span> <a href="tel:0902999000">0902999000</a>
          </div>
          <div className="header__language">
            <button
              className="header__language-btn"
              onClick={handleShowLanguageListClick}
            >
              <img src="./images/vi-vn.png" width={20} alt="" />
              <i className="fas fa-sort-down" />
            </button>
            <div className={`language__list ${languageList}`}>
              <div className="language__item">
                <img src="./images/vi-vn.png" alt="" />
                <span>Việt Nam</span>
              </div>
              <div className="language__item">
                <img src="./images/en-gb.png" alt="" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header__right-bottom">
          <nav className={`navbar ${navbar}`}>
            <Link className="navbar__link" to="/" onClick={handleShowNavBar}>
              <i className="fad fa-home-alt" />
              Home
            </Link>
            <Link
              className="navbar__link"
              to="/about"
              onClick={handleShowNavBar}
            >
              <i className="fad fa-id-card" />
              Về Chúng Tôi
            </Link>
            <Link
              className="navbar__link"
              to="/service"
              onClick={handleShowNavBar}
            >
              <i className="fab fa-servicestack" />
              Dịch Vụ
            </Link>
            <a
              className="navbar__link"
              href="#contact"
              onClick={handleShowNavBar}
            >
              <i className="fad fa-user-md-chat" />
              Nhận Tư Vấn
            </a>
            <Link className="navbar__link" to="/" onClick={handleShowNavBar}>
              <i className="fas fa-newspaper" />
              Tin Tức
            </Link>
            {user && (
              <div className="navbar__admin">
                <div className="navbar__link">
                  Admin <i className="fas fa-sort-down" />
                </div>
                <div className="admin__list-func">
                  <Link to="/customer" className="admin__func-item">
                    <i className="fad fa-users-cog"></i> Quản lý khách hàng
                  </Link>
                  <div
                    className="admin__func-item"
                    onClick={() => logoutUser()}
                  >
                    <i className="fad fa-sign-out-alt"></i> Đăng xuất
                  </div>
                </div>
              </div>
            )}
          </nav>
          <div className="icons">
            <div
              className="fas fa-bars"
              id="menu-btn"
              onClick={handleShowNavBar}
            ></div>
            {!user && (
              <div
                className="fas fa-user"
                id="login-btn"
                onClick={handleShowFormClick}
              ></div>
            )}
          </div>
          <form onSubmit={login} className={`login-form ${formLogin}`}>
            <h3>Đăng Nhập (Admin)</h3>
            <input
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={onChangeLoginForm}
              className="box"
            />
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={onChangeLoginForm}
              className="box"
            />
            {/* <div className="remember">
              <input type="checkbox" name id="remember-me" />
              <label htmlFor="remember-me">Nhớ mật khẩu</label>
            </div> */}
            <input type="submit" value="Đăng Nhập" className="btn-base" />
            {/* <div className="links">
          <a href="#">Quên mật khẩu</a>
          <a href="#">Đăng ký</a>
        </div> */}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
