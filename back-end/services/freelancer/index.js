const Freelancer = require("../../Models/freelancer");

const getFreelancerList = async () => {
  const data = await Freelancer.find();

  return data;
};

module.exports = {
  getFreelancerList,
};
