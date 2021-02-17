import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
export default class Register extends Component {
  render() {
    return (
      <div className="form-container">
        <br></br>
        <form className="register" onSubmit={this.haldlerButtonClick}>
          <h4>REGISTER </h4>

          <div className="">
            <input
              className="name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="">
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="">
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="">
            <input
              className="mobile"
              type="text"
              name="mobile"
              placeholder="Mobile"
            />
          </div>

          <input type="submit" value="Register" />
          <div className="form-footer">
            <a href="#">Already have an account?</a>

            <Link
              className="createAccount"
              to="/Login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
