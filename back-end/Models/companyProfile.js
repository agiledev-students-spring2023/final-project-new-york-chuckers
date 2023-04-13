const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyProfileSchema = new Schema(
  {
    id: {
      type: String,
      required:false,
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
const companyProfile = mongoose.model("companyProfile", companyProfileSchema);

module.exports = {
  companyProfile,
};
