
import React, { Component } from 'react';
import Product from "component/Product";
import {Col} from "react-bootstrap";

const serachedProduct = [
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
    {"title":"Desh ka namak",desc:"fjsdfjdsjfdsjflkdjf"},
];
export default class Main extends Component {
    render() {
        return (
            <div className="p-2">
                Main content
                <div className="row">
                {serachedProduct.map(({title,desc},index)=>(
                    <Col key={index} className="col-md-3 my-1">
                        <Product
                        title= {title}
                        desc= {desc}
                        />
                    </Col> 
                )
                )}
                </div>
                
            </div>
        )
    }
}
