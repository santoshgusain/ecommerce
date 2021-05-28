import React, { Component } from 'react';
import {Card} from "react-bootstrap";

export default class OrderHistoryNav extends Component {
    render() {
        return (
            <Card style={{ width: '100%',borderRadius: "0px", borderBottom: "1px solid grey" }}>
                <Card.Body style={{ padding:"10px 0 10px 4px" }}>
                <Card.Link className="nav-links" href="#">Orders</Card.Link>
                <Card.Link className="nav-links" href="#">Buy Again</Card.Link>
                <Card.Link className="nav-links" href="#">Cancelled Order</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
