const Position = require("../../Models/position.js");

const getPositionList = async () => {
  const data = await Position.find();

  return data;
};

module.exports = {
  getPositionList,
};
