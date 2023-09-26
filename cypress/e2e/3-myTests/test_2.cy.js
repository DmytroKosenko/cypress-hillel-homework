describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Create test with studio", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    cy.get(":nth-child(5) > .nav-bar-link").click();
    cy.get('[data-cy="pricing-annually-top"] > .flex').should(
      "have.text",
      " Save 11% "
    );
    /* ==== End Cypress Studio ==== */
  });
});
