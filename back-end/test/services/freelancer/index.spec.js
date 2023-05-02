const {
  getFreelancerList,
} = require("../../../services/freelancer/index.js");
const { assert } = require("chai");

describe("getFreelancerList function", () => {
  it("should succeed", async () => {
    const data = await getFreelancerList();

    assert.isArray(data);
    assert.isAbove(data.length, 0);
  });
});
