/// <reference types="cypress" />
//cypress run --headed -b chrome cypress/e2e/Custom_scenarious/newborn.cy.js
describe("Login with API request", () => {
  beforeEach(() => {
    cy.loginAndSetLocalStorage();
  });

  it("send login data", () => {
    cy.visit("/overview");
    cy.get("div.card-content").eq(0).should("be.visible");
  });

  it("create category", () => {
    cy.createNewCategory("category_1_1_1");
    cy.visit("/categories");
    cy.wait(5000);
    cy.get(".content a.collection-item", { timeout: 3000 }).should(
      "be.visible"
    );
  });
});
