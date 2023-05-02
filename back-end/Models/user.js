const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  buffer: {
    type: String,
    required: false,
  },
  mimetype: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
