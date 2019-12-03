const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

let userData = {
  "validId" : 6,
  "invalidId" : 0,
  "ngoId" : 1,
  "invalidNgo" : 0,
  "unauthorizedUser" : 2
}

describe("Update User Details Unit Tests", () => {
  // #1 should Update details and return Success
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
    chai.request(app)
      .put("/api/user/updatedetails/" + userData.validId)
      .send(data)
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
    chai
      .request(app)
      .put("/api/user/updatedetails/" + userData.invalidId)
      .send(data)
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
    chai
      .request(app)
      .get("/api/user/profiledetails/" + userData.validId)
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
    chai
      .request(app)
      .get("/api/user/profiledetails/" + userData.invalidId)
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
    chai
      .request(app)
      .get("/api/user/offeredhelp/" + userData.validId)
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
    chai
      .request(app)
      .get("/api/user/offeredhelp/" + userData.invalidId)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(404);
        // Not found should be true.
        res.notFound.should.equal(true);
        done();
      });
  });
});

describe("Register help ", () => {
  // #1 should Register help and return Success
  it("Should Register help with same address", done => {
    let data = {
      AddressDetailId: 14
    };
    // calling register help api
    chai
      .request(app)
      .post("/api/user/offeringhelp/" + userData.validId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

    // #2 should Register help and return Success
  it("Should Register help with different address", done => {
    let data = {
      AddressDetail: {
        HouseBuilding: "50-9",
        city: "delhi"
      }
    };
    // calling register help api
    chai
      .request(app)
      .post("/api/user/offeringhelp/" + userData.validId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

    // #3 should return message User Not Found
  it("Should give message User Not Found", done => {
    let data = {
      AddressDetail: {
        HouseBuilding: "50-9",
        city: "delhi"
      }
    };
    // calling register help api
    chai
      .request(app)
      .post("/api/user/offeringhelp/" + userData.invalidId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  })
    // #4 should return CAN'T OFFER HELP USER NOT VERIFIED
  it("Should give message CAN'T OFFER HELP USER NOT VERIFIED", done => {
    // calling register help api
    chai
      .request(app)
      .post("/api/user/offeringhelp/" + userData.unauthorizedUser)
      .end((err, res) => {
        // HTTP status should be 401
        res.status.should.equal(401);
        // Error key should be false.
        res.unauthorized.should.equal(true);
        done();
      });
  });

});

describe("Verify NGO Unit Tests", () => {
  // #1 should Update details and return Success
  it("Should Return Success after Verifying NGO", done => {
    // calling verify api
    chai
      .request(app)
      .put(`/api/user/${userData.validId}/verify/${userData.ngoId}`)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should Return User Not Found
  it("Should Return User Not Found", done => {
    // calling verify api
    chai
      .request(app)
      .put(`/api/user/${userData.invalidId}/verify/${userData.ngoId}`)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  });

    // #3 should Return NGO Not Found
  it("Should Return NGO Not Found", done => {
    // calling verify api
    chai
      .request(app)
      .put(`/api/user/${userData.validId}/verify/${userData.invalidNgo}`)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  });

    // #4 should Return Access Denied
  it("Should Return Access Denied", done => {
    // calling verify api
    chai
      .request(app)
      .put(`/api/user/${userData.unauthorizedUser}/verify/${userData.ngoId}`)
      .end((err, res) => {
        // HTTP status should be 401
        res.status.should.equal(401);
        // Error key should be false.
        res.unauthorized.should.equal(true);
        done();
      });
  });
});
