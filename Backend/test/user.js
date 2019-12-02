var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8000");

let userData = {
  "validId" : 6,
  "invalidId" : 0
}

describe("Update User Details Unit Tests", () => {
  // #1 should Upadte details and return Success
  it("Should Return Success after updating details", done => {
    let data = {
      userdetails: {
        LastName: "last",
        MiddleName: "middle"
      },
      addressdetails: {
        housebuilding: "1000",
        city: "delhi",
        state: "delhi"
      },
      verificationdetails: {
        isActive: 1
      }
    };
    // calling update detail api
    server
      .put("/api/user/updatedetails/" + userData.validId)
      .send(data)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should return message 'No Userid found to update'
  it("Should Return message User Not Found", done => {
    let data = {
      userdetails: {
        LastName: "last",
        MiddleName: "middle"
      },
      addressdetails: {
        housebuilding: "1000",
        city: "delhi",
        state: "delhi"
      },
      verificationdetails: {
        isActive: 1
      }
    };
    // calling update detail api
    server
      .put("/api/user/updatedetails/" + userData.invalidId)
      .send(data)
      .expect(404) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  });
});
