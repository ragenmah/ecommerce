import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { signup } from "./index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //form ko default action le kaam garnu vayena
    setValues({ ...values, error: false });
    // signup function
    signup({ name, event, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          success: true,
        });
      }
    });
  };

  //to show error message
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  //to show success message
  const showError = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Your account has been created.
    </div>
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
            <form>
              {showError()}
              {showSuccess()}
              <div className="col-12 mb-3">
                <label for="firstname">FirstName</label>
                <input
                  type="text"
                  name="fname"
                  id="firstname"
                  placeholder="FirstName"
                  className="form-control"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div>
              {/* <div className="col-12 mb-3">
                <label for="lastname">LastName</label>
                <input
                  type="text"
                  name="lname"
                  id="lastname"
                  placeholder="LastName"
                  className="form-control"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div> */}
              <div className="col-12 mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div className="col-12 mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="***********"
                  className="form-control"
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>
              <div className="col-12 mb-3">
                <label for="cpassword">Confirm Password</label>
                <input
                  type="password"
                  name="cpass"
                  id="cpassword"
                  placeholder="***********"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <button
                  className="btn btn-primary form-control"
                  onClick={handleSubmit}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
