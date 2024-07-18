// handlers

// TO TAKE CARE OF USER
const bcrypt = require("bcrypt");
const UserModel = require("../database/Models/Users.model");
const { UserRegService } = require("../services/User.service");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
  try {
    // logging
    const { message, status } = await UserRegService(req.body);

    res.json({
      message,
      status,
    });
  } catch (error) {
    res.json({
      message: "SOME ERROR OCCURED  " + error.message,
      status: 500,
    });
  }
}

async function loginUser(req, res) {
  try {
    const secret = process.env.SECRET_JWT;
    const { username, password } = req.body;

    const foundUser = await UserModel.find({ username: username });
    const validatePassword = await bcrypt.compare(
      password,
      foundUser[0].password
    );

    if (foundUser && validatePassword) {
      const payload = {
        user: { id: foundUser[0]._id.toString(), username },
        role: foundUser[0].role,
      };

      const authToken = jwt.sign(payload, secret, { expiresIn: 600000000 });

      res.json({
        status: 200,
        message: "Authencation Success",
        token: authToken,
      });
    } else {
      // res.setStatus = 200
      res.status(401).json({
        status: 401,
        message: "Authencation Failed",
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: "Authencation Failed",
    });
  }
}

async function gymEquipment(req, res) {
  res.json({
    name: "fitness V1",
    type: "gym V1",
    asdassd: "asdsadsad",
    headless: "chrome",
    point: "blank",
  });
}

module.exports = { createUser, loginUser, gymEquipment };
