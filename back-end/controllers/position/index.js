const Position = require("../../Models/position.js");

const listPosition = async (req, res) => {
  const data = await Position.find();
  res.json(data);
};

module.exports = {
  listPosition,
};
