import { ObjectId } from "mongodb";
import { faker } from "@faker-js/faker";

//ENV_URL=http://localhost:3000 npm run cy_run_chrome  --spec cypress/e2e/Custom_scenarious/query_mongo.cy.js

describe("find data", () => {
  context("usage of mongodb", () => {
    it("find many", () => {
      cy.findMany({}, { collection: "users" }).then((mongoResult) => {
        cy.task("log", mongoResult);
      });
    });
  });

  context("UI & API request", () => {
    it("login by UI", () => {
      cy.request({
        method: "POST",
        url: "/api/users/authenticate",
        body: {
          username: "tomsmith",
          password: "1234567",
        },
      }).then((response) => {
        const authToken = response.body.token;
        Cypress.env("authTNext13", authToken);
        expect(response.status).to.eq(200);
      });
    });

    it("create user", () => {
      //Homework_lesson_19
      // create a request to create a user with data from the faker package
      // fields: firstName, lastName, username, password
      // after a successful request, add a check to the username field to see if there is a database

      let firstName = faker.person.firstName();
      let lastName = faker.person.lastName();
      let userName = `${firstName}${lastName}`;
      let userPassword = faker.internet.password();

      cy.request({
        method: "POST",
        url: "/api/users/register",
        headers: {
          Authorization: `Bearer ${Cypress.env("authTNext13")}`,
        },
        body: {
          firstName: firstName,
          lastName: lastName,
          username: userName,
          password: userPassword,
        },
      });

      cy.request({
        method: "GET",
        url: "/api/users",
        headers: {
          Authorization: `Bearer ${Cypress.env("authTNext13")}`,
        },
      }).then((response) => {
        const createdUsers = response.body;
        const newUserCreated = createdUsers.some(
          (item) => item.username === userName
        );
        expect(newUserCreated).to.be.true;
      });
    });

    it("find many", () => {
      cy.findMany({}, { collection: "users" }).then((mongoResult) => {
        cy.task("log", mongoResult);
      });
    });
  });
});
