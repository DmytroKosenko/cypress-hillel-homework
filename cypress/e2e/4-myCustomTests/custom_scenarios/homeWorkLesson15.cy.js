// with command task() https://docs.cypress.io/api/commands/task
// create in cypress.config file command that save into json file urls
// use that task() command in cy.js files for saving the url in
// can use package 'fs-extra' or other

/// <reference types="cypress" />

describe("Tests for Guru website", () => {
  beforeEach(() => {
    const baseUrl = "https://www.guru99.com/";
    cy.visit(baseUrl);
    cy.task("saveUrl", baseUrl);
  });

  it("Open the website", () => {
    cy.get("h1.thick-heading", { timeout: 6000 }).should("be.visible");
    cy.wait(4000);
  });

  it("Click on HR option from drop-down list SAP", () => {
    cy.get("a > span > span").eq(1).click();
    cy.get("#menu-item-4739").click();
    cy.get("#post-452 > div > header > h1")
      .should("be.visible", { timeout: 3000 })
      .and("have.class", "entry-title")
      .and("have.text", "SAP HCM Course: SAP HR Module Tutorial");
  });
});
