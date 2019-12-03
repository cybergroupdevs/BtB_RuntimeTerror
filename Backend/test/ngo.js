const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const { expect } = chai;
chai.use(chaiHttp);
chai.should();
let userData = {
  validId: 1,
  invalidId: 0,
  userId: 6,
  invalidUser: 0,
  unauthorizedNGO: 2
};

describe("Update NGO Details Unit Tests", () => {
  // #1 should Upadte details and return Success
  it("Should Return Success after updating details", done => {
    let data = {
      userdetails: {
        AuthorityName: "user_",
        Phone2: "9987"
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
      .put("/api/ngo/updatedetails/" + userData.validId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should return message 'No NGO found to update'
  it("Should Return message NGO Not Found", done => {
    let data = {
      userdetails: {
        AuthorityName: "user_",
        Phone2: "9987"
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
      .put("/api/ngo/updatedetails/" + userData.invalidId)
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

describe("Get List of NGOs", () => {
  // #1 should return NGO's List
  it("Should return List of NGOs", done => {
    // calling get list api
    chai
      .request(app)
      .get("/api/ngo/list")
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
});

describe("Get List of Government Shelters", () => {
    // #1 should return Govt Shelters List
  it("Should return List of Govt Shelters", done => {
    // calling get list api
    chai
      .request(app)
      .get("/api/government/shelters")
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Response should be a array of Govt Shelters
        for (let i = 0; i < res.body.data.length; i++) {
          res.body.data[i].AccomodationType.should.equal("Government_Shelters");
        }
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
});

describe("Get Profile Details of NGO", () => {
  // #1 should return profile detail
  it("Should return profile details containing(userDetails, addressDetails, verificationDetails)", done => {
    // calling get profile api
    chai
      .request(app)
      .get("/api/ngo/profiledetails/" + userData.validId)
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
  it("Should contain message NGO not found", done => {
    // calling get profile api
    chai
      .request(app)
      .get("/api/ngo/profiledetails/" + userData.invalidId)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(404);
        // Not found should be true.
        res.notFound.should.equal(true);
        done();
      });
  });
});

describe("Get List of Private properties", () => {
  // #1 should return Private properties List
  it("Should return List of Govt Shelters", done => {
    // calling get list api
    chai
      .request(app)
      .get("/api/private/properties")
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Response should be a array of Govt Shelters
        for (let i = 0; i < res.body.data.length; i++) {
          res.body.data[i].AccomodationType.should.equal("Private");
        }
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
});

describe("Register Government shelters ", () => {
  // #1 should Register help and return Success
  it("Should Register Government shelters with same address", done => {
    let data = {
      AddressDetailId: 12
    };
    // calling register Government shelters api
    chai
      .request(app)
      .post("/api/ngo/government/shelters/" + userData.validId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should Register Government shelters and return Success
  it("Should Register Government shelters with different address", done => {
    let data = {
      AddressDetail: {
        HouseBuilding: "50-9",
        city: "delhi"
      }
    };
    // calling register Government shelters api
    chai
      .request(app)
      .post("/api/ngo/government/shelters/" + userData.validId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #3 should Register Government shelters and return Success
  it("Should give message NGO Not Found", done => {
    let data = {
      AddressDetail: {
        HouseBuilding: "50-9",
        city: "delhi"
      }
    };
    // calling register help api
    chai
      .request(app)
      .post("/api/ngo/government/shelters/" + userData.invalidId)
      .send(data)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });

    // #4 should Return Access Denied
  it("Should Return Access Denied", done => {
    // calling verify api
    chai
      .request(app)
      .put("/api/ngo/government/shelters/" + userData.unauthorizedNGO)
      .end((err, res) => {
        console.log(res);
        // HTTP status should be 401
        res.status.should.equal(401);
        // Error key should be false.
        res.unauthorized.should.equal(true);
        done();
      });
  });
  });

  // #4 should return Can't find the address
  it("Should return Can't find the address", done => {
    // calling register help api
    chai
      .request(app)
      .post("/api/ngo/government/shelters/" + userData.invalidId)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  });
});

describe("Verify User Unit Tests", () => {
  // #1 should Update details and return Success
  it("Should Return Success after Verifying User", done => {
    // calling verify api
    chai
      .request(app)
      .put(`/api/ngo/${userData.validId}/verify/${userData.userId}`)
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
      .put(`/api/ngo/${userData.validId}/verify/${userData.invalidUser}`)
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
      .put(`/api/ngo/${userData.invalidId}/verify/${userData.userId}`)
      .end((err, res) => {
        // HTTP status should be 404
        res.status.should.equal(404);
        // Error key should be false.
        res.notFound.should.equal(true);
        done();
      });
  });

});

describe("Get List of Un-verified Users", () => {
  // #1 should return Private properties List
  it("Should return List of Un-verified Users", done => {
    // calling get list api
    chai
      .request(app)
      .get("/api/unverifiedusers")
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Response should be a array of Govt Shelters
        for (let i = 0; i < res.body.data.length; i++) {
          res.body.data[i].isVerifiedUser.should.equal(false);
        }
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
});
