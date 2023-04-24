const FreelancerProfile = require("../../Models/freelancerProfile");

const getFreelancerList = async () => {
  const data = await FreelancerProfile.find();

  return data;
};

module.exports = {
  getFreelancerList,
};
