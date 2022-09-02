import React, { Component } from "react";
import {connect} from 'react-redux'
import product_img from "../../assets/images/shop.jpg";
import { withRouter } from "react-router-dom";

import {loadUsers,findUsers} from '../../store/actions/users';
import {getProductById} from '../../store/actions/product';

import spinnerImage from 'assets/images/spinner.svg'

class ProductDetails extends Component {
  state = {
    product: {}
  }


  componentDidMount() {

    // getProductById(this.props.match.params.product_id);
    const product = this.props.productReducer.products.find(prod => prod._id === this.props.match.params.product_id);
    console.log(this.props.productReducer);
    this.setState({product})
  }

  render() {
    const { longDescription , name, description, price, } = this.state?.product;
    
    const {users, isLoading,searchedUsers} = this.props.usersReducer;

    return (
      <div>
        {isLoading && 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%', backgroundColor: '#5555',
        left: 0, top: 0}}>
            <img src={spinnerImage} style={{width: 100, height: 100}} alt="loading"/>
          </div>}
        <div className="left">
          <img src={product_img} alt="product" />
        </div>
        <div className="right">
          <h4>{description} | Price: &#8377;{price}</h4>
          <hr />
          <p>{longDescription}</p>
          <table>
            <tr>
              <td>Price</td>
              <td>$200</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    usersReducer: state.usersReducer  ,
    productReducer: state.productReducer 
  })


export default connect(mapStateToProps,getProductById) (withRouter(ProductDetails));


