import React, { Component } from "react";
import Header from "component/Header/index";
import Main from "./main";
import Footer from "component/Footer/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}
