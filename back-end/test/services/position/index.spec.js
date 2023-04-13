const {
  getPositionListFromMockaroo,
} = require("../../../services/position/index.js");
const { assert } = require("chai");

describe("getPositionListFromMockaroo function", () => {
  it("should succeed", async () => {
    const data = await getPositionListFromMockaroo();

    assert.isArray(data);
    assert.isAbove(data.length, 0);
  });
});
