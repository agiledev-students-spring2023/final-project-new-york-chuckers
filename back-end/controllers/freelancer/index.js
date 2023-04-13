const {
  getFreelancerListFromMockaroo,
} = require("../../services/freelancer/index.js");

const listFreelancer = async (req, res) => {
  const data = await getFreelancerListFromMockaroo();
  res.json(data);
};

module.exports = {
  listFreelancer,
};
