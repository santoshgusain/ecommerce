import React, { Component } from 'react'

import SideBar from "component/SideBar";
import Main from "screens/SearchedProduct/Main";

export default class SearchedProducts extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>  
                </div>
                <div className="col-md">
                    <Main/>
                </div>
            </div>
        )
    }
}
