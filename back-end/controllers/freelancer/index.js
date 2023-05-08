const { getFreelancerList } = require("../../services/freelancer/index.js");

const listFreelancer = async (req, res) => {
  const data = await getFreelancerList();
  res.json(data);
};

module.exports = {
  listFreelancer,
};
