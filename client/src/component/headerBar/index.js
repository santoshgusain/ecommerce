import React, { Component } from 'react'

export default class HeaderBar extends Component {

    
    render() {
        const url = "";
        return (
                <div className="navbar" style={{justifyContent: "left"}}>
                    <a className="active mx-1" href={url}><i className="fa fa-fw fa-home"></i> Home</a> 
                    <a href={url}><i className="fa fa-fw fa-search mx-1"></i> Search</a> 
                    <a href={url}><i className="fa fa-fw fa-envelope mx-1"></i> Contact</a> 
                    <div style={{display:"flex", flex: "1", flexDirection: 'row-reverse'}}>
                        <a  href={url}><i class="fas fa-shopping-cart"></i>Cart</a> 
                    </div>
                </div>
        )
    }
}