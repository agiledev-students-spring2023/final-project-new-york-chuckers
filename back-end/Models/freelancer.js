const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
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
  introduction: {
    type: String,
    required: true,
  },
  pastProject: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Freelancer = mongoose.model("freelancer", freelancerSchema);
module.exports = Freelancer;
