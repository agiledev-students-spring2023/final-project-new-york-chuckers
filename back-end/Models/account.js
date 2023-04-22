const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    account_id: {
      type: Number,
      required: true
    },
    limit:{
      type: Number,
      required: false
    },
    products:{
      type: Array,
      required: false
    }
  }
);


module.exports = mongoose.model("Account", accountSchema);
