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
      let firstName = faker.person.firstName();
      let lastName = faker.person.lastName();
      cy.request({
        method: "POST",
        url: "/api/users/register",
        headers: {
          Authorization: `Bearer ${Cypress.env("authTNext13")}`,
        },
        body: {
          firstName: firstName,
          lastName: lastName,
          username: `${firstName}${lastName}`,
          password: "Qwe1234567",
        },
      });
    });

    it("find many", () => {
      cy.findMany({}, { collection: "users" }).then((mongoResult) => {
        cy.task("log", mongoResult);
      });
    });
  });
});
