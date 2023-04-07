import { requestApiWithAuth } from "../../api/requests.js";

export const getFreelancerListFromMockaroo = async () => {
  const response = await requestApiWithAuth("freelancers.json", {
    method: "get",
  });

  return response.data;
};
