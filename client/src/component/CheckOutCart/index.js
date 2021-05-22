import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography, Grid} from '@material-ui/core'
import Box from "@material-ui/core/Box/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:"100%",
    // borderBottom:"1px solid #eae8e8"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: [32, "!important"]
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CheckOutCart() {
  const classes = useStyles();
  return (
      <Card className={classes.root} elevation={1}>
      <CardContent>
        <Box mb={5}>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Order Summary
        </Typography>
        </Box>
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Grid container mt={100}>
            <Grid xs={6} item>
            Subtotal
            </Grid>
            <Grid xs={6}  item>
            &#8377; 0
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={6} item>
            Shipping
            </Grid>
            <Grid xs={6}  item>
            &#8377; 0
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={6} item>
            Discount
            </Grid>
            <Grid xs={6}  item>
            &#8377; 0
            </Grid>
          </Grid>

          <Grid container style={{fontWeight:"900"}}>
            <Grid xs={6} item>
            Order Total
            </Grid>
            <Grid xs={6}  item>
            &#8377; 0
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
      </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
