
import React, { Component } from 'react'
import { NavDropdown } from "react-bootstrap";;

export default class SideMenu extends Component {

    url="#";
    render() {
        return (
            <div style={{display:"inline-flex"}}>
            <i style={{alignItems:"center",display: "flex"}} className="fa fa-user" aria-hidden="true"></i>
            <NavDropdown title="Santosh Gusain" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
        )
    }
}
