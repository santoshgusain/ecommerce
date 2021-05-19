const express   = require('express');
const app       = express();
const cors      = require('cors');

const port      = process.env.PORT || 2009
const db        = require("./config/db");
const users  = require('./routes/users');
const products  = require('./routes/products');
// const User    = require("./models/user");
app.use(express.json());
app.use(cors())

db();

app.use('/users',users);
app.use('/products',products);


app.get("/",(req,res)=>{
    res.send('server is setup');
})

// app.get("/save", async (req,res)=>{
//     try {
//     let data = {
//         name:"abhishek",
//         post: "Helloo",
//         dob: new Date()
//     }    
//     const user = new User(data);
//     await user.save();

//     res.send("Success"); }
//     catch(error) {
//         res.status(400).json(error)
//     }
// })



app.listen( port, (err)=>{
    if(err){
        console.log('nothing working');
    }
});

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(1);
  });