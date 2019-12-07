const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app")
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

var userToken;
var ngoToken;
describe("Sign-up Unit Tests", () => {
  // #1 should Sign-up user and return Success
  it("Should Return Success after sign-up user", done => {
    let data = {
      UserTypeId: 5,
      UserName: "USER_TEST",
      FirstName: "USER_TEST",
      Email: "USER@TEST.COM",
      password: "TEST"
    };
    // calling Sign-up api
    chai
      .request(app)
      .post("/api/user/signup")
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should Sign-up NGO and return Success
  it("Should Return Success after sign-up NGO", done => {
    let data = {
      UserTypeId: 5,
      AuthorityName: "NGO_TEST",
      Email: "NGO@TEST.COM",
      Phone1: "999999",
      password: "TEST"
    };
    // calling sign-up api
    chai
      .request(app)
      .post("/api/ngo/signup")
      .send(data)
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
  
    // #3 should return error if user mail already exits
  it("Should Return error", done => {
    let data = {
      UserTypeId: 5,
      UserName: "USER_TEST",
      FirstName: "USER_TEST",
      Email: "USER@TEST.COM",
      password: "TEST"
    };
    // calling Sign-up api
    chai
      .request(app)
      .post("/api/user/signup")
      .send(data)
      .end((err, res) => {
        // HTTP status should be 500
        res.status.should.equal(500);
        // created should be false.
        res.created.should.equal(false);
        done();
      });
  });

  // #4 should return error if ngo mail already exits
  it("Should Return error", done => {
    let data = {
      UserTypeId: 5,
      AuthorityName: "NGO_TEST",
      Email: "NGO@TEST.COM",
      Phone1: "999999",
      password: "TEST"
    };
    // calling sign-up api
    chai
      .request(app)
      .post("/api/ngo/signup")
      .send(data)
      .end((err, res) => {
        // HTTP status should be 500
        res.status.should.equal(500);
        // created should be false.
        res.created.should.equal(false);
        done();
      });
  });

    // #5 should return Bad request
  it("Should Return Bad request for user sign-up", done => {
    // calling Sign-up api
    chai
      .request(app)
      .post("/api/user/signup")
      .end((err, res) => {
        // HTTP status should be 400
        res.status.should.equal(400);
        // Error key should be false.
        res.badRequest.should.equal(true);
        done();
      });
  });

  // #6 should return Bad request
  it("Should Return Bad request for NGO sign-up", done => {
    // calling sign-up api
    chai
      .request(app)
      .post("/api/ngo/signup")
      .end((err, res) => {
        // HTTP status should be 400
        res.status.should.equal(400);
        // Error key should be false.
        res.badRequest.should.equal(true);
        done();
      });
  });
});

describe("Login Unit Tests", () => {
  // #1 should Login and return token
  it("Should Return Success (User) with Token", done => {
    let data = {
      Email: "USER@TEST.COM",
      password: "TEST"
    };
    // calling Login api
    chai
      .request(app)
      .post("/api/login")
      .send(data)
      .end((err, res) => {
        userToken = res.body.data.Token;
        // response should contain token
        res.body.data.should.have.property("Token");
        // HTTP status should be 200
        res.should.have.status(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should return Code 401 (Access Denied)
  it("Should Return message Email password don't match (User)", done => {
    let data = {
      Email: "USER@TEST.COM",
      password: "wrong_password"
    };
    // calling Login api
    chai
      .request(app)
      .post("/api/login")
      .send(data)
      .end((err, res) => {
        // response should contain errorMessage
        res.body.should.have.property("errorMessage");
        res.body.errorMessage.should.equal("Email password don't match");
        // HTTP status should be 200
        res.status.should.equal(401);
        done();
      });
  });

  // #3 should Login and return token
  it("Should Return Success (NGO) with Token", done => {
    let data = {
      Email: "NGO@TEST.COM",
      password: "TEST"
    };
    // calling Login api
    chai
      .request(app)
      .post("/api/login")
      .send(data)
      .end((err, res) => {
        ngoToken = res.body.data.Token;
        // response should contain token
        res.body.data.should.have.property("Token");
        // HTTP status should be 200
        res.should.have.status(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #4 should return Code 401 (Access Denied)
  it("Should Return message Email password don't match (NGO)", done => {
    let data = {
      Email: "NGO@TEST.COM",
      password: "wrong_password"
    };
    // calling Login api
    chai
      .request(app)
      .post("/api/login")
      .send(data)
      .end((err, res) => {
        // response should contain errorMessage
        res.body.should.have.property("errorMessage");
        res.body.errorMessage.should.equal("Email password don't match");
        // HTTP status should be 200
        res.status.should.equal(401);
        done();
      });
  });
});

describe("Delete Unit Tests USER", () => {
  // #1 should delete user and return Success
  it("Should Return Success after deleting user", done => {
    // calling delete api
    chai
      .request(app)
      .delete("/api/user/" + "USER@TEST.COM")
      .set({ Authorization: userToken })
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should delete ngo and return Success
  it("Should Return Success after deleting NGO", done => {
    // calling delete NGO api
    chai
      .request(app)
      .delete("/api/ngo/" + "NGO@TEST.COM")
      .set({ Authorization: ngoToken })
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

    // #3 should return Not Authorized (User)
  it("Should Return Success after deleting user", done => {
    // calling delete api
    chai
      .request(app)
      .delete("/api/user/" + "wrong_email")
      .set({ Authorization: userToken })
      .end((err, res) => {
        // HTTP status should be 401
        res.status.should.equal(401);
        // Error key should be false.
        res.unauthorized.should.equal(true);
        done();
      });
  });

  // #4 should return Not Authorized (NGO)
  it("Should Return Success after deleting NGO", done => {
    // calling delete NGO api
    chai
      .request(app)
      .delete("/api/ngo/" + "wrong_email")
      .set({ Authorization: ngoToken })
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(401);
        // Error key should be false.
        res.unauthorized.should.equal(true);
        done();
      });
  });
});
