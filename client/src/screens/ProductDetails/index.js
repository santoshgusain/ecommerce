import React, { Component } from "react";
import {connect} from 'react-redux'
import product_img from "../../assets/images/shop.jpg";
import { withRouter } from "react-router-dom";
import Moment from 'react-moment';

import {loadUsers,findUsers} from '../../store/actions/users';

import spinnerImage from 'assets/images/spinner.svg'

class ProductDetails extends Component {
  componentDidMount() {
    this.props.loadUsers();
    this.props.findUsers('san');
  }

  render() {
    const { product_id } = this.props.match.params;
    const {users, isLoading,searchedUsers} = this.props.usersReducer;

    return (
      <div>
        {isLoading && 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%', backgroundColor: '#5555',
        left: 0, top: 0}}>
            <img src={spinnerImage} style={{width: 100, height: 100}} alt="loading"/>
          </div>}

        {users?.map(({name, post, dob}) => (
          <div>
            {name} {!!dob && `(${dob})`}
            <br />
            {post}
          </div>
        ))}
  <hr/>
        {searchedUsers?.map(({name, post, dob}) => (
          <div style={{color: 'red'}}>
            {name} {!!dob && <Moment date={dob} format="DD MM, YYYY" />}
            <br />
            {post}
          </div>
        ))}

        <div className="left">
          <img src={product_img} alt="product" />
        </div>
        <div className="right">
          <h4>RealMe Note 8</h4>
          <hr />
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
    usersReducer: state.usersReducer  
  })

export default connect(mapStateToProps, {loadUsers,findUsers}) (withRouter(ProductDetails));


