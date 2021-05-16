const express = require("express");
const router = express.Router();
const {addProducts, getProducts, deleteProducts} = require("../controllers/products");

router.post('/', addProducts)
router.get('/', getProducts)
router.delete('/:productId', deleteProducts)

module.exports = router;

