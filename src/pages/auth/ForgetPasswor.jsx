import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ForgetPasswor = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{marginBottom: "200px"}}>
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
            <form>
              <div className="col-12 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                />
              </div>
              <div className="col-4 mb-3">
                <button className="btn btn-primary form-control">
                  Send password resent link
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

export default ForgetPasswor;
