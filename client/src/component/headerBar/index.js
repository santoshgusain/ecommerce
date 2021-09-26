import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderBar extends Component {
  // method to show cart only when user is logged in
  showCart = () => {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <Link to="/cart">
          <i class="fas fa-shopping-cart"></i>Cart
        </Link>
      );
    }
    return "";
  };

  render() {
    return (
      <div
        className="navbar navbar-secondary py-0 px-3"
        style={{ justifyContent: "left" }}
      >
        <Link className="active mx-2" to="/">
          <i className="fa fa-fw fa-envelope"></i>Home
        </Link>
        <Link className="active mx-2" to="/contact">
          <i className="fa fa-fw fa-envelope"></i> Contact
        </Link>
        <Link className="active mx-2" to="/about">
          <i className="fa fa-fw fa-envelope"></i>About
        </Link>
        <div
          style={{ display: "flex", flex: "1", flexDirection: "row-reverse" }}
        ></div>
        {this.showCart()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.usersReducer.userLogin,
});

export default connect(mapStateToProps)(HeaderBar);
