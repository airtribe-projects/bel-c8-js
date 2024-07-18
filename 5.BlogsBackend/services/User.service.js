const bcrypt = require("bcrypt");
const UserModel = require("../database/Models/Users.model");

async function UserRegService(body) {
  try {
    const { username, password, email, contact, role } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //   Call for DB to store username, password, name, gender, dob

    const userObj = new UserModel({
      username,
      password: hashedPassword,
      email,
      contact,
      role,
    });

    await userObj.save();

    return {
      status: 201,
      message: "User Created Successfully " + userObj._id,
    };
  } catch (error) {
    throw new Error("USER NOT CREATED !!!" + error);
  }
}

module.exports = { UserRegService };
