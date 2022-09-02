import React, { Component } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./banner";
import Product from "component/Product/index";
import SearchBar from "component/Search";

import {loadProducts} from "store/actions/product";
import product_img from "../../assets/images/shop.jpg";

class Main extends Component {


  componentDidMount(){

    this.props.loadProducts();
  }

  render() {
    const {productReducer} = this.props;
    
    return (
      <>
        <Container fluid className="main-compt pt-3 pb-3">
          <Banner />
          <div className="feature-product container center">
            <h2 className="feature-title">Featured Products</h2>
            <Row>
              {productReducer.products?.map((product) => {
                const { _id, name, description, price, image } = product;

                return (
                  <Col className="col-md-3" 
                  key={_id}>
                    <Link to={"/product/" + _id}>
                      <Product
                        id={_id}
                        image={product_img}
                        desc={description}
                        title={name}
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



const mapStateToProps = (state) => ({
  productReducer: state.productReducer  
})

export default connect(mapStateToProps, {loadProducts}) (Main);