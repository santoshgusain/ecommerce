const User = require("../models/user");

exports.getUsers = async(req, res) => {
    try{

        const user = await User.find();

        res.json(user);
    }catch(error) {
        console.error(error);
        res.status(400).send(error.msg())
    }
}

exports.findUsers = async (req,res)=>{
    try{
    const user = await User.find({name: new RegExp(`.*${req.params.name}.*`)});
        res.json(user);
    }catch(err){
        res.status(400).json(err.msg());
    }
}

exports.addUser = async (req,res)=>{
    
    try{

        let data = {
            name : "santosh",
            post:"web dev",
            dob : new Date()
        }
       const user = new User(data);
       let result = await user.save();
       res.status(200).json(result);
    }catch(err){
        console.error(err);
        res.status(400).send(err.msg());
    }
}