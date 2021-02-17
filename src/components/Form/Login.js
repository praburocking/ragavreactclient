import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="form-container">
        <br></br>
        <form className="login">
          <h4>LOGIN </h4>
          <div className="">
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <br />
          <div className="">
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <br />
          <div className="check">
            <input
              className="checkbox"
              type="checkbox"
              name="check"
              id="rpwd"
            />
            <label for="rpwd">RememberMe</label>
            <a href="#" style={{ color: "white" }}>
              Forgot Password?
            </a>
          </div>

          <input type="submit" value="Login" />
          <div className="form-footer">
            <p>Don't have an account?</p>

            <Link
              className="createAccount"
              to="/Register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
