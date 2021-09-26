import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class SignupMobile extends Component {
  render() {
    return (
      <div className="container-fluid px-5 py-3">
        <h1>Sign Up | Enter Your Mobile Number</h1>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile Number" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Verify
          </Button>
        </Form>
      </div>
    );
  }
}
