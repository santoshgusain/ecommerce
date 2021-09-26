import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="container-fluid px-5 py-3 text-center">
        <h1>Sign Up</h1>
        <Link className="btn btn-info mx-1 rounded-0" to="/signup-mobile">Sign up with Mobile Number</Link>
        <Link type="button" variant="" className="btn btn-outline-primary rounded-0" to="/signup-email">Sign up with Email</Link>
      </div>
    );
  }
}
