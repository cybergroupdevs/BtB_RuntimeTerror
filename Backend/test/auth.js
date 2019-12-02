var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8000");

describe("Login Unit Tests", () => {

  // #1 should Login and return token
  it("Should Return Success with Token", done => {
    let data = {
      Email: "singhal",
      password: "abc"
    };
    // calling Login api
    server
      .post("/api/login")
      .send(data)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // response should contain token
        res.body.data.should.have.property("Token");
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });

  // #2 should return Code 401 (Access Denied)
  it("Should Return message Email password don't match", done => {
    let data = {
      Email: "singhal",
      password: "wrong_password"
    };
    // calling Login api
    server
      .post("/api/login")
      .send(data)
      .expect(401) // THis is HTTP response
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

describe("Sign-up Unit Tests", () => {
  // #1 should Sign-up user and return Success
  it("Should Return Success after sign-up user", done => {
    let data = {
      UserTypeId: 5,
      UserName: "USER_TEST",
      FirstName: "USER_TEST",
      Email: "TEST",
      password: "TEST"
    };
    // calling Sign-up api
    server
      .post("/api/user/signup")
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

  // #2 should Sign-up NGO and return Success
  it("Should Return Success after sign-up NGO", done => {
    let data = {
      UserTypeId: 5,
      AuthorityName: "NGO_TEST",
      Email: "TEST",
      Phone1: "999999",
      password: "TEST"
    };
    // calling sign-up api
    server
      .post("/api/ngo/signup")
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
  
    // #3 should return error if user mail already exits
  it("Should Return error", done => {
    let data = {
      UserTypeId: 5,
      UserName: "USER_TEST",
      FirstName: "USER_TEST",
      Email: "TEST",
      password: "TEST"
    };
    // calling Sign-up api
    server
      .post("/api/user/signup")
      .send(data)
      .expect(500) // THis is HTTP response
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
      Email: "TEST",
      Phone1: "999999",
      password: "TEST"
    };
    // calling sign-up api
    server
      .post("/api/ngo/signup")
      .send(data)
      .expect(401) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 500
        res.status.should.equal(500);
        // created should be false.
        res.created.should.equal(false);
        done();
      });
  });
});

describe("Delete Unit Tests", () => {

  // #1 should delete user and return Success
  it("Should Return Success after deleting user", done => {
    // calling delete api
    server
      .delete("/api/user/" + "TEST")
      .expect(200) // THis is HTTP response
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
    server
      .delete("/api/ngo/" + "TEST")
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.error.should.equal(false);
        done();
      });
  });
});
