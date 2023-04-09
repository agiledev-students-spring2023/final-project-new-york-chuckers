const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /freelancer", () => {
  it("should return a status code of 200", (done) => {
    chai
      .request(app)
      .get("/freelancer")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe("GET /position", () => {
  it("should return a status code of 200", (done) => {
    chai
      .request(app)
      .get("/position")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
