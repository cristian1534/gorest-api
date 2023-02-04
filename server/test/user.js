const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
const should = chai.should();
const color = require("colors");
const { request } = require("chai");
require("dotenv").config();

/// THESE TEST COULD RUN IF DATABASE MODEL EXISTS, IS AN EMULATION OF TESTING
/// TAKING THE RESPONSE FROM GOREST API.

chai.use(chaiHttp);
describe("Testing routes for USER.".yellow, () => {
  before((done) => {
    console.log("TEST USER STARTING...");
    done();
  });
  // /*
  // POST METHOD WITH LOGGED USER
  // */
  describe("https://gorest.co.in/public/v1/users", () => {
    it(
      "POST new USER, validate filled up of body properties, response, message and status"
        .blue,
      (done) => {
        let user = {
          name: "Kanti Gupta",
          email: "kanti_gupta@schmitt.co",
          gender: "female",
          status: "active",
        };
        const token = process.env.TOKEN;

        chai
          .request(server)
          .post("https://gorest.co.in/public/v1/users")
          .set({ Authorization: `Bearer ${token}` })
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("meta").eql("null");
            res.body.should.have.property("data");
            done();
          });
      }
    );
  });
  // /*
  // POST METHOD WITHOUT LOGGED USER
  // */
  describe("https://gorest.co.in/public/v1/users", () => {
    it(
      "POST new USER, validate filled up of body properties, response, message and status"
        .blue,
      (done) => {
        let user = {
          name: "Kanti Gupta",
          email: "kanti_gupta@schmitt.co",
          gender: "female",
          status: "active",
        };
        request(server)
          .post("https://gorest.co.in/public/v1/users")
          .send(user)
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a("object");
            res.body.should.have.property("message").eql("NOT AUTHORIZED");
            done();
          });
      }
    );
  });
  // /*
  // GET METHOD ALL USERS
  // */
  describe("https://gorest.co.in/public/v1/users".blue, () => {
    it("GET should fetch all USERS, validate filled up of body properties, response, message and status", (done) => {
      request(server)
        .get("https://gorest.co.in/public/v1/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data").should.be.a("array");
          res.body.should.have.property("meta").length.should.not.be.eql(0);
          done();
        });
    });
  });
  // /*
  // GET METHOD ONE USER
  // */
  describe("https://gorest.co.in/public/v1/users/:id".blue, () => {
    let id = "example-id";
    it("GET should show message if USER is not found, validate filled up of body properties, response, message and status", (done) => {
      request(server)
        .get(`https://gorest.co.in/public/v1/users/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("error").eql("USER NOT FOUND");
          done();
        });
    });
  });

  // /*
  // PUT METHOD
  // */
  describe("https://gorest.co.in/public/v1/users/:id", () => {
    it(
      "6- Should NOT UPDATE USER by given WRONG id in URL. Validate type of response, message and status."
        .blue,
      (done) => {
        const token = process.env.TOKEN

        let id = "63b22785e5ac7e47193027f0";

        chai
          .request(server)
          .put(`https://gorest.co.in/public/v1/users/${id}`)
          .set({ Authorization: `Bearer ${token}` })
          .send({
            name: "Juan Gomez",
            email: "Juan@gomez.co",
            gender: "male",
            status: "active",
          })
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .to.eql("NOT FOUND.");
            done();
          });
      }
    );
  });
  // /*
  // PUT METHOD
  // */
  describe("https://gorest.co.in/public/v1/users/:id", () => {
    it(
      "7- Should NOT UPDATE a USER if NOT LOGGED IN. Validate type of response, message and status."
        .blue,
      (done) => {
        let id = "63b22785e5ac7e47193027f0";

        chai
          .request(server)
          .put(`https://gorest.co.in/public/v1/users/${id}`)
          .send({
            name: "Juan Gomez",
            email: "Juan@gomez.co",
            gender: "male",
            status: "active",
          })
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a("object");
            res.body.should.have.property("message").to.eql("NOT AUTHORIZED.");
            done();
          });
      }
    );
  });
  // /*
  // DELETE METHOD
  // */
  describe("https://gorest.co.in/public/v1/users/:id", () => {
    it(
      "8- Should NOT DELETE a USER by given WRONG id in URL. Validate type of response, message and status."
        .blue,
      (done) => {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2M2E2YTU5ZGM4MjUyNzUyYWYyNzNmODIiLCJpYXQiOjE2NzE5MTQyMDksImV4cCI6MTY3MzEyMzgwOX0.4E1LBtMwciSJrWE1SbJRCJzY0xfbpqt84lxKTE_F6y8";

        let id = "63b22785e5ac7e47193027fF";

        chai
          .request(server)
          .delete(`https://gorest.co.in/public/v1/users/${id}`)
          .set({ Authorization: `Bearer ${token}` })
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .to.eql("NOT FOUND.");
            done();
          });
      }
    );
  });
  // /*
  // DELETE METHOD
  // */
  describe("https://gorest.co.in/public/v1/users/:id", () => {
    it(
      "7- Should NOT DELETE a USER if NOT LOGGED IN. Validate type of response, message and status."
        .blue,
      (done) => {
        let id = "63b22785e5ac7e47193027f0";

        chai
          .request(server)
          .delete(`https://gorest.co.in/public/v1/users/${id}`)
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a("object");
            res.body.should.have.property("message").to.eql("NOT AUTHORIZED");
            done();
          });
      }
    );
  });
  // /*
  //
  // */
  after((done) => {
    console.log("TESTING HAS FINISHED...".cyan);
    done();
  });
});
