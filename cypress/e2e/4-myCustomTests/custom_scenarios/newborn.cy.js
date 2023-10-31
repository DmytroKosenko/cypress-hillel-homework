//create a command to create a position (product) website URL http://5.189.186.217/login
//request to create a category (take the category ID from the response)
//this is another request to create a product (use the category ID in the request)
//after creating the product, add a UI test to test the created product
//npm run cy_run_chrome_headed  --spec cypress/e2e/Custom_scenarious/newborn.cy.js

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


  it("create category with product", () => {
    // Create a new category
    cy.createNewCategory("super_category");
    cy.visit("/categories");
    cy.wait(2000);
    cy.get(".content a.collection-item", { timeout: 3000 }).should(
      "be.visible"
    );
    cy.wait(2000);

    // Add product to new created category
    cy.createNewProductToCategory("super_product_1", 101);
    cy.wait(2000);
    cy.visit("/categories");
    cy.get(
      "body > app-root > app-site-layout > main > app-categories-page > div.row > div > div > a:nth-child(404)",
      { timeout: 3000 }
    )
      .should("be.visible")
      .click();
    cy.get(
      "body > app-root > app-site-layout > main > app-categories-form > app-positions-form > div > div > div:nth-child(2) > div > a",
      { timeout: 3000 }
    ).should("be.visible");
    cy.wait(2000);

  it("create category", () => {
    cy.createNewCategory("category_1_1_1");
    cy.visit("/categories");
    cy.wait(5000);
    cy.get(".content a.collection-item", { timeout: 3000 }).should(
      "be.visible"
    );
  });
});
