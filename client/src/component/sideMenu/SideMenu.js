
import React, { Component } from 'react'
import { NavDropdown } from "react-bootstrap";
import {Person} from '@material-ui/icons';
import {Link} from "react-router-dom";

export default class SideMenu extends Component {

    url="#";
    render() {
        return (
            <div className="user-controls" style={{display:"inline-flex", alignItems: 'center'}}>
            {/* <i style={{alignItems:"center",display: "flex"}} className="fa fa-user" aria-hidden="true"></i> */}
            <Person style={{color: 'white'}} />
            <NavDropdown title="Santosh Gusain" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/orders">Profile</Link>
                <Link className="dropdown-item" to="/orders">Orders</Link>
                <Link className="dropdown-item" to="/orders">Setting</Link>
                <Link className="dropdown-item" to="/orders">Logout</Link>
            </NavDropdown>
            </div>
        )
    }
}
