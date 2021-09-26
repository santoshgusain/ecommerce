import React, { Component } from 'react';
import {Box,Grid} from "@material-ui/core";
import StepperBar from "component/StepperBar";

export default class LiveOrder extends Component {
    render() {
        return (
            <Grid className="container" xs={12}>
                <StepperBar/>
                <Grid item xs={6}>
                    hello
                </Grid>
                <Grid item xs={6}>
                    hello
                </Grid>
            </Grid>
        )
    }
}
