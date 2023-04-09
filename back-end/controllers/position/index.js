const {
  getPositionListFromMockaroo,
} = require("../../services/position/index.js");

const listPosition = async (req, res) => {
  const data = await getPositionListFromMockaroo();
  res.json(data);
};

module.exports = {
  listPosition,
};
