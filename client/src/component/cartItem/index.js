import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import product_img from "../../assets/images/shop.jpg";

export default class CartItem extends Component {
  render() {
    return (
      <Card className="mb-3  mr-4 py-4" style={{border:"0px",borderBottom:"1px solid #eee",borderRadius:"0px"}}>
        <Card.Body style={{ display: "flex", padding: "12px" }}>
          <div style={{ flexBasis: "190px" }}>
            <Card.Img variant="top" src={product_img} style={{width: 200}} />
          </div>
          <div className="ml-3">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </div>
          <div className="ml-2" style={{    width: "90px"}} >
            <Box my={1}>

              <TextField 
                inputProps={{
                  style: {
                    padding : [0, "!important"],
                    width:"90px"
                  }
              }}
                id="outlined-number"
                label="Qty"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                fullWidth="true"
              />
            </Box>
            <Box w={4}>

              <Button
                inputProps={{
                    style: {
                      padding : [0, "!important"],
                      width:"100px",
                      marginTop:"10px"
                    }
                }}
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
                size="small"
                fullWidth="true"
              >
                Delete
              </Button>
            </Box>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
