import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="container-fluid px-5 py-3">
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
