import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "component/Search"

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>Shop-Mania</Navbar.Brand>
          </Link>

          <Search className='my-1' />

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/product">
                <Nav.Link href="#link">Products</Nav.Link>
              </Link>
              <Link to="/support">
                <Nav.Link href="#link">Support</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </Router>
    );
  }
}
