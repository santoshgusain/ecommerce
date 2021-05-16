const express = require("express");
const router = express.Router();
const {login, logout} = require("../controllers/auth");

router.post('/', login)
router.get('/', logout)

module.exports = router;

