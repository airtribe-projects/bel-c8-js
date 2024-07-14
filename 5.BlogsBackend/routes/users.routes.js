const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {});

router.post("/register", async (req, res) => {
  const body = req.body;
  const { username, password, name, gender, dob } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  //   Call for DB to store username, password, name, gender, dob
});
module.exports = router;
