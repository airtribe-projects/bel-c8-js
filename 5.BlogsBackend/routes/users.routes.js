const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/users.controller");

router.post("/login", loginUser);

router.post("/register", createUser);
module.exports = router;
