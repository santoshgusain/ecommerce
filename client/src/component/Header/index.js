import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "component/Search";
import SideMenu from "component/sideMenu/SideMenu";
import HeaderBar from "component/headerBar";
import LoginSignup from "component/LoginSignup";
import logoImage from "assets/images/logo.png";
import { connect } from "react-redux";

class Header extends Component {
  islogin = () => {
    const { isLogin } = this.props;
    if (isLogin) {
      return <SideMenu />;
    }
    return <LoginSignup />;
  };
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Link
            to="/"
            style={{ alignItems: "center", display: "flex", marginLeft: 6 }}
          >
            <img src={logoImage} alt="logo" width="55" className="mr-2" />
            <Navbar.Brand>Shop-Mania</Navbar.Brand>
          </Link>
          <Search className="my-1" />
          {this.islogin()}
        </Navbar>
        <HeaderBar />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.usersReducer.userLogin,
});

export default connect(mapStateToProps)(Header);
