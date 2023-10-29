import { ObjectId } from "mongodb";

describe("find data", () => {
  context("usage of mongodb", () => {
    it("find many", () => {
      cy.findMany({}, { collection: "users" }).then((mongoResult) => {
        cy.task("log", mongoResult);
      });
    });
  });
});
