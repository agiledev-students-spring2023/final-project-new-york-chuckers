import { requestApiWithAuth } from "../../api/requests.js";

export const getPositionListFromMockaroo = async () => {
  const response = await requestApiWithAuth("positions.json", {
    method: "get",
  });

  return response.data;
};
