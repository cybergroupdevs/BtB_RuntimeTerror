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

describe("Get Profile Details of User", () => {
  // #1 should return profile detail
  it("Should return profile details containing(userDetails, addressDetails, verificationDetails)", done => {
    // calling get profile api
    server
      .get("/api/user/profiledetails/" + userData.validId)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Response should be contain (userDetails, addressDetails, verificationDetails)
        res.body.data.should.have.property("userDetails");
        res.body.data.should.have.property("addressDetails");
        res.body.data.should.have.property("verificationDetails");
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should return Not Found
  it("Should contain message User not found", done => {
    // calling get profile api
    server
      .get("/api/user/profiledetails/" + userData.invalidId)
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

describe("Get List of User Offered Helps", () => {
  // #1 should return Private properties List
  it("Should return List of User Offered Helps", done => {
    // calling get list api
    server
      .get("/api/user/offeredhelp/"+userData.validId )
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Response should be a array of private properties
        for (let i = 0; i < res.body.data.length; i++) {
          res.body.data[i].AccomodationType.should.equal("Private");
        }
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

    // #1 should return not found
  it("Should return not found", done => {
    // calling get list api
    server
      .get("/api/user/offeredhelp/"+userData.invalidId )
      .expect(404) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(404);
        // Not found should be true.
        res.notFound.should.equal(true);
        done();
      });
  });
});
