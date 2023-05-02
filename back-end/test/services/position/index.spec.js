const {
  getPositionList,
} = require("../../../services/position/index.js");
const { assert } = require("chai");

describe("getPositionList function", () => {
  it("should succeed", async () => {
    const data = await getPositionList();

    assert.isArray(data);
    assert.isAbove(data.length, 0);
  });
});
