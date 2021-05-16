import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="text-center">
          &#169; Santosh coorporation | 2021
        </Container>
      </footer>
    );
  }
}
