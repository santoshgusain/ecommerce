import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./banner";
import Product from "component/Product";
import product_img from "../../assets/images/shop.jpg";
import { Link } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    title: "Toothpaste",
    desc: "Isme namak hai",
    price: 35,
    image: product_img,
  },
  {
    id: 2,
    title: "Tata Salt",
    desc: "Desh ka namak",
    price: 29,
    image: product_img,
  },
  {
    id: 3,
    title: "Maggi",
    desc: "Do minute mein khushiyan",
    price: 20,
    image: product_img,
  },
  {
    id: 4,
    title: "Kurkure",
    desc: "Tedha hai pad meda hai",
    price: 10,
    image: product_img,
  },
];

export default class Main extends Component {
  render() {
    return (
      <>
        <Container fluid className="main-compt pt-3 pb-3">
          <Banner />
          <div className="feature-product container center">
            <h2 className="feature-title">Featured Products</h2>
            <Row>
              {dummyProducts?.map((product) => {
                const { id, title, desc, price, image } = product;

                return (
                  <Col className="col-md-3">
                    <Link to={"/product/" + id}>
                      <Product
                        key={id}
                        id={id}
                        image={image}
                        desc={desc}
                        title={title}
                        price={price}
                      />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
