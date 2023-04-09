const { requestApiWithAuth } = require("../../api/requests.js");

const getFreelancerListFromMockaroo = async () => {
  const response = await requestApiWithAuth("freelancers.json", {
    method: "get",
  });

  return response.data;
};

module.exports = {
  getFreelancerListFromMockaroo,
};
