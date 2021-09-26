import React, { Component } from "react";
import { Person } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default class LoginSignup extends Component {
  render() {
    return (
      <div
        className="user-controls"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <Person style={{ color: "white" }} />
        <Link className="active link" to="/login">
          Login
        </Link>|
        <Link className="active link" to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }
}
