import { ObjectId } from "mongodb";

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
    it("create user", () => {
      cy.request({
        method: "POST",
        url: "/api/users/register",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTNlNzhlNTc4OTNmMmM0MzUzYmNhMzAiLCJpYXQiOjE2OTg1OTY0MTQsImV4cCI6MTY5OTIwMTIxNH0.BhbVSMIaVd5zPndcvDfdZYOIfvveXLgPSbofTEbMKck",
        },
        body: {
          firstName: "sam",
          lastName: "smith",
          username: "samsmith",
          password: "Qwe1234567",
        },
      });
    });
  });
});
