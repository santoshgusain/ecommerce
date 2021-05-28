import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
// import { TextField, Box, Button } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import product_img from "../../assets/images/shop.jpg";

export default class OrderedItem extends Component {
  render() {
    return (
        <div class="row">
       
        <div class="col-md-12">
            <Card
                className="mb-3"
                style={{border: "0px",borderBottom: "1px solid #eee",borderRadius: "0px"}}
            >


                <div class="col-md-12  bg-light order-item-heading">
                    <div class="col-md-4" style={{flexDirection: "row", display: "flex",justifyContent:"space-between"}}>
                        <div>
                            <div className="sub-heading">ORDER PLACED</div>
                            <div className="order-item-value">19 October 2019</div>
                        </div>
                        <div>
                            <div className="sub-heading">TOTAL</div>
                            <div className="order-item-value">486.00</div>
                        </div>
                        <div>
                            <div className="sub-heading">SHIP TO</div>
                            <div className="order-item-value">Santosh Gusain</div>
                        </div>
                    </div>
                    <div class="col-md-5"></div>
                    <div class="col-md-3 float-right">
                            <div className="sub-heading float-right">ORDER # 406-5463109-2605158</div>
                            <div className="order-item-value float-right">View order details | Invoice </div>
                    </div>
                </div>

                <Card.Body style={{ display: "flex", padding: "12px" }}>
                    <div>
                        <Card.Img variant="top" src={product_img} style={{ width: 200 }} />
                    </div>
                    <div className="ml-3" >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </div>
                    <div className="ml-3 action-buttons"  >
                        <Button className="w-100 rounded-0 mt-1 p-1 small item-action" variant="secondary" size="lg">
                        Ask Product Question
                        </Button>
                        <Button className="w-100 rounded-0 mt-1 p-1 item-action" variant="secondary" size="lg">
                        Write The Product Review
                        </Button>
                        <Button className="w-100 rounded-0 mt-1 p-1  item-action" variant="secondary" size="lg">
                        Archive Order
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
  }
}
