import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "component/Search";
import SideMenu from "component/sideMenu/SideMenu";
import HeaderBar from "component/headerBar";

import logoImage from 'assets/images/logo.png'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Link to="/" style={{alignItems: 'center', display: 'flex', marginLeft: 6}}>
            <img src={logoImage} alt='logo' width='55' className='mr-2' />
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
