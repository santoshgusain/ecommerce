import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "component/Search";
import SideMenu from "component/sideMenu/SideMenu";
import HeaderBar from "component/headerBar";

export default class Header extends Component {
  render() {
    const url = "";
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>Shop-Mania</Navbar.Brand>
          </Link>
          <Search className='my-1' />
          <SideMenu/>
        </Navbar>
        <HeaderBar/>
      </>
    );
  }
}
