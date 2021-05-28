import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography, Grid,Paper} from '@material-ui/core'
import Box from "@material-ui/core/Box/Box";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
      padding: "10px",
      // flex:"1",
      "&>.addresspaper":{
        padding: "10px",
        height:"100px",
      }
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: [18, "!important"]
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Address(){

        const classes = useStyles();
        return (
          <>
            <Grid className={classes.root} item md={3}>
                <Paper elevation={3} className='addresspaper'>
                  dsfsfd
                </Paper >
            </Grid>
          </>
            
        );
}
