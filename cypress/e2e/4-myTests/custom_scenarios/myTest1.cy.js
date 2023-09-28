context("Testing Guru Website", () => {
  it("Open the website", () => {
    cy.visit("/");
    cy.get("h1.thick-heading").should("be.visible");
  });

  it("check search and validate results", () => {
    cy.get("button.search-toggle-open")
      .should("be.visible")
      .and("have.attr", "data-toggle-target", "#search-drawer")
      .click();
    cy.get("input.search-field")
      .should("be.visible")
      .and("have.attr", "type", "search")
      .type("functional testing{enter}");
    cy.url().should("contain", "/search_gcse?q=functional+testing");
  });
});
