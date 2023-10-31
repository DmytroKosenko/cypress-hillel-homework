//create a command to create a position (product) website URL http://5.189.186.217/login
//request to create a category (take the category ID from the response)
//this is another request to create a product (use the category ID in the request)
//after creating the product, add a UI test to test the created product
//npm run cy_run_chrome_headed  --spec cypress/e2e/Custom_scenarious/newborn.cy.js

/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Login with API request", () => {
  beforeEach(() => {
    cy.loginAndSetLocalStorage();
  });

  it("send login data", () => {
    cy.visit("/overview");
    cy.get("div.card-content").eq(0).should("be.visible");
  });

  it("Create category", () => {
    let categoryName = faker.commerce.product();
    cy.createNewCategory(categoryName);
    cy.task("log", categoryName);
    cy.visit("/categories");
    cy.wait(5000);
    cy.get(".content a.collection-item", { timeout: 5000 }).should(
      "be.visible"
    );
  });

  it("create product for category", () => {
    let productName = faker.commerce.productName();
    cy.createProduct(productName);
    cy.visit(`/categories/${Cypress.env("categoryId")}`);
    cy.get("a.collection-item span")
      .eq(0)
      .should("be.visible")
      .contains(productName);
  });

  it("remove the category by id", () => {
    cy.removeCategoryById();
    cy.visit(`/categories/${Cypress.env("categoryId")}`).should(
      "not.be.visible"
    );
  });
});
