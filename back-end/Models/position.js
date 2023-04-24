const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  pay: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  recruiter: {
    type: String,
    required: true
  }
});

const Position = mongoose.model("position", positionSchema);
module.exports = Position;
