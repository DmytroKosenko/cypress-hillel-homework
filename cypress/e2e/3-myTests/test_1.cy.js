context("Go to Cypress website", () => {
  it("Open the main page and click Documentation", () => {
    cy.visit("/");
    cy.get("astro-island +  a:nth-child(3)").click();
    cy.url().should("include", "/guides/overview/why-cypress");
    cy.get("h1").should("contain.text", "Why Cypress?");
  });
});
