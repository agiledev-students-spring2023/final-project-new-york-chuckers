const { requestApiWithAuth } = require("../../api/requests.js");

const getPositionListFromMockaroo = async () => {
  const response = await requestApiWithAuth("positions.json", {
    method: "get",
  });

  return response.data;
};

module.exports = {
  getPositionListFromMockaroo,
};
