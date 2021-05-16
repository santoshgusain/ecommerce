import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import product_img from "../../assets/images/shop.jpg";

export default class Product extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

  /**
   * default prop declaration in class
   */
  static defaultProps = {
    image: product_img,
  };

  render() {
    const { image, title, desc } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
