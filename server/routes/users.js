const express = require("express");
const router = express.Router();
const {addUser, getUsers, findUsers} = require("../controllers/users");

router.get('/save', addUser)
router.get('/find/:name', findUsers)
router.get('/', getUsers)

module.exports = router;

