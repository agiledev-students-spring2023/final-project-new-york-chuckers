import { getPositionListFromMockaroo } from "../../services/position/index.js";

export const listPosition = async (req, res) => {
  const data = await getPositionListFromMockaroo();
  res.json(data);
};
