import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Home} from '@material-ui/icons'

export default class HeaderBar extends Component {

    
    render() {
        const url = "";
        return (
                <div className="navbar navbar-secondary py-0 px-3" style={{justifyContent: "left"}}>
                    <a className="active mx-2" href={url} ><Home style={{fontSize: 19}} /> Home</a> 
                    <a href={url} className='mx-2'><i className="fa fa-fw fa-search"></i> Search</a> 
                    <a href={url} className='mx-2'><i className="fa fa-fw fa-envelope"></i> Contact</a> 
                    <div style={{display:"flex", flex: "1", flexDirection: 'row-reverse'}}>
                    <Link to="/cart">
                        <i class="fas fa-shopping-cart"></i>Cart
                    </Link>
                    </div>
                </div>
        )
    }
}
