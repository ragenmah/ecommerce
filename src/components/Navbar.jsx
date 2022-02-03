import React from "react";

const navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row custom-header align-items-center">
          <div className="col-lg-3">
            <a className="navbar-brand text-white" href="/">
              Amazon
            </a>
          </div>
          <div className="col-lg-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-3">
            <ul className="d-flex justify-content-evenly">
              <li className="list-unstyled">
                <a
                  href="/signin"
                  className="text-decoration-none text-white fs-5"
                >
                  <i className="bi bi-box-arrow-in-right fs-3"></i>Signin
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="/signup"
                  className="text-decoration-none text-white fs-5"
                >
                  <i className="bi bi-person-plus-fill fs-3"></i>Signup
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="/cart"
                  className="text-decoration-none text-white fs-5"
                >
                  <i className="bi bi-cart-plus-fill fs-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/deals">
                  Deals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
