const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: 1m remove unique contraint.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 4,
    unique: [true, "Username should be unique"],
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 4,
    unique: [true, "Username should be unique"],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  role: {
    type: String,
  },
  contact: {
    type: Number,
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
