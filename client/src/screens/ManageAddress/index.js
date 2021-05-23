import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import {Typography, Grid,Paper,Box,TextField} from '@material-ui/core';
// import Box from "@material-ui/core/Box/Box";
// import Avatar from '@material-ui/core/Avatar';
// import Chip from '@material-ui/core/Chip';
// import DoneIcon from '@material-ui/icons/Done';
// import {Link} from "react-router-dom";
import Address from "component/Address";


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'inline-flex',
        justifyContent:"space-between",
        width:"100%"
    },
    left: {
        flex:1
    },
    right:{
        flex:1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    }
  }));

 export default function ManageAddress() {
 
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <div className={classes.left}>
                    {/* <Paper>
                    </Paper> */}
                    <Box>
                        <Paper elevation={3}>
                            <Address/>
                        </Paper>
                    </Box>
                    <Paper elevation={3} />
                    <Paper elevation={3} />
                </div>
                <div className={classes.right}>
                <div>
                    <Box>
                        <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="outlined"
                        />
                        <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        />
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                        <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="outlined"
                        />
                        </Box>
                    </div>
                </div>
            </div>
        )
}
