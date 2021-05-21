import React, { Component } from "react";
import { Card } from "react-bootstrap";
import product_img from "../../assets/images/shop.jpg";

export default class CartItem extends Component {
  render() {
    return (
      <Card className="mb-1 mx-1">
        <Card.Body style={{ display: "flex", padding: "12px" }}>
          <div style={{ flexBasis: "190px" }}>
            <Card.Img variant="top" src={product_img} />
          </div>
          <div className="mx-1">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </div>
          <div className="mx-1">
            <i class="fas fa-trash-alt w-4"></i>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
