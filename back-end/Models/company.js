const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    id: {
      type: String,
      required:true,
    },
    name: {
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
    industry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create mongoose Model
const Company = mongoose.model("Company", companySchema);

module.exports = {
  Company,
};
