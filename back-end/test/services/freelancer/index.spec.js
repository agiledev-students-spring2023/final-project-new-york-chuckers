const {
  getFreelancerListFromMockaroo,
} = require("../../../services/freelancer/index.js");
const { assert } = require("chai");

describe("getFreelancerListFromMockaroo function", () => {
  it("should succeed", async () => {
    const data = await getFreelancerListFromMockaroo();

    assert.isArray(data);
    assert.isAbove(data.length, 0);
  });
});
