import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography, Grid} from '@material-ui/core'
import Box from "@material-ui/core/Box/Box";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding: "10px"
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

export default function Address(props){

        const classes = useStyles();
        const {hideChangeBtn ,height} = props;
        return (
            <Card style={{height:height}} className={classes.root} elevation={1}>
            <CardContent>
              <Box mb={1}>
              <Typography  className={classes.title} color="textSecondary" gutterBottom>
                Delivery Address
                <Box>
                    <Chip
                        avatar={<Avatar>D</Avatar>}
                        label="Default Address"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                        size="small"
                    />
                </Box>
              </Typography>
              </Box>
              <Grid container className={classes.root} spacing={2}>
              <Grid container justify="center" spacing={0}>
                <Grid container mt={100}>
                    <Grid  item>
                    Near suraj bengali dhaba, Phase 5 Mohali sahilmajra
                    </Grid>
                    <Grid  item>
                    Mohali Pincode - 160055
                    </Grid>
                   
                </Grid> 
              </Grid>
            </Grid>
            { !hideChangeBtn ? (
                    <Box mt={1}>
                        <Link to="/change-address">
                            <Button  
                                style={{
                                    padding : [0, "!important"],
                                    width:["80%", "!important"],
                                    marginTop:"10px",
                                    // backgroundColor:"yellow"
                                }} 
                                variant="outlined"
                                size="small"
                                fullWidth="true"
                                color="primary"
                                >
                                Change Address
                            </Button>
                        </Link>
                    </Box>
            ) : ("")}
            
            </CardContent>
          </Card>
        );
}
