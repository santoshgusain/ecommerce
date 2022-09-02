const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const _id = req.body._id;
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    console.log("_id",_id);
    if (_id == undefined || _id == null) {
      var product = await Product.find();
    } else {
      var product = await Product.find({ _id });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.msg());
  }
};

exports.addProducts = async (req, res) => {
  try {
    const user = await User.find({
      name: new RegExp(`.*${req.params.name}.*`),
    });
    res.json(user);
  } catch (err) {
    res.status(400).json(err.msg());
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    let data = {
      name: "santosh",
      post: "web dev",
      dob: new Date(),
    };
    const user = new User(data);
    let result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.msg());
  }
};
