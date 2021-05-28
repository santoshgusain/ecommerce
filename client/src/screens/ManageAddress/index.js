import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box,TextField,Button,Grid} from '@material-ui/core';
import { Save as SaveIcon } from '@material-ui/icons';
import Address from "component/Address";
import DefaultAddress from "component/Address/DefaultAddress";


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'inline-flex',
        justifyContent:"space-between",
        // width:"100%",
        backgroundColor:"white",
        width:"100%"

    },
    left: {
        width:"60%",
        padding:"20px",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    right:{
        padding:"0 10px",
        display:"flex",
        margin:"50px 1px",
        flex:1,
        flexDirection:"column",
        paddingHorizontal:"10px",
        
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2),
          },
        '& .MuiOutlinedInput-input':{
            padding:"12px",
            fontSize:"14px",
    
        },
        '& .addresstitle':{
            fontSize:"20px",
            marginBottom:"25px"
        }

    },
    button:{
        flex:1,
        margin:0
    }

    
  }));

 export default function ManageAddress() {
 
    const classes = useStyles();
        return (
            <>
            <div className={classes.root}>
                <Box  mt={2} className={classes.left}>
                <Grid container spacing={1}>
       
                    <Grid md={12} item> 
                        <Box><h1>Delivery Address</h1></Box>
                        <hr/>
                    </Grid>
                    <Grid md={12} item> 

                                    <DefaultAddress className="defaultaddress" hideChangeBtn={true} height={"150px"}/> 
                    </Grid>
                    <Address>sdfsfsdfsdf</Address>
                    <Address>sdfsfsdfsdf</Address>
                    <Address>sdfsfsdfsdf</Address>
                    <Address>sdfsfsdfsdf</Address>
                    <Address>sdfsfsdfsdf</Address>
                    <Address>sdfsfsdfsdf</Address>
                </Grid>
                </Box>
                <Box  className={classes.right}>
                    <Box className="addresstitle" ml={1}>New Address</Box>
                    <TextField
                    required
                    id="outlined-required"
                    label="Address"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="City"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    id="outlined-number"
                    label="State"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-number"
                    label="Pin Code"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                    <Box ml={1}>
                        <Button

                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            fullWidth={true}
                        >
                            Save
                        </Button>
                    </Box>
                    </Box>
            </div>
            </>
        )
}
