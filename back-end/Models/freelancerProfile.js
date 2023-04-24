const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  experiences: {
    type: String,
    required: true,
  },
  projects: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const FreelancerProfile = mongoose.model(
  "freelancerProfile",
  freelancerProfileSchema
);
module.exports = FreelancerProfile;
