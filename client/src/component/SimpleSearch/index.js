import React, { Component } from 'react';
import {Form,FormControl,Button} from "react-bootstrap";

export default class SimpleSearch extends Component {
    render() {
        return (
                <Form inline>
                    <FormControl style={{borderRadius: "0",width:"360px"}} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button style={{borderRadius: "0"}}  variant="outline-success">Search</Button>
                </Form>
        )
    }
}
