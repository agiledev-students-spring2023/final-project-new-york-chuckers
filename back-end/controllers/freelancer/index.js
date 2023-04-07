import { getFreelancerListFromMockaroo } from "../../services/freelancer/index.js";

export const listFreelancer = async (req, res) => {
  const data = await getFreelancerListFromMockaroo();
  res.json(data);
};
