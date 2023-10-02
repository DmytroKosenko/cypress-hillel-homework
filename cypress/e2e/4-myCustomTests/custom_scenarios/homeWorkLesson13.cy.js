//create a test for ui part of the cypress.io website with https://docs.cypress.io/api/commands/eq#Syntax
//requirements:
//10 steps
//filling data in inputs
//verification of the elements after loading
//-------additional task -------
//create beforeEach method for context

describe("create 10-steps test for UI part of the cypress.io website", () => {
  beforeEach(() => {
    cy.loginAndSetCookie("/", "authCoka", "someCookie");
  });

  it("Open the website", () => {
    cy.get("img[alt='Logo']").should("be.visible");
  });

  it("Go through the site documentation", () => {
    cy.get("astro-island + a:nth-child(3)").click();
    cy.get("#What-youll-learn")
      .should("be.visible")
      .should("have.attr", "id", "What-youll-learn")
      .contains("What you'll learn");
    cy.url().should("include", "/guides/overview/why-cypress");
    cy.get("icon[name='code']").should("have.text", " Writing tests").click();
    cy.get("div > a.menu__link.menu__link--sublist.menu__link--sublist-caret")
      .eq(2)
      .should("have.text", "End-to-End Testing")
      .click();
    cy.get(
      "#__docusaurus_skipToContent_fallback > div > aside > div > div > nav > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(2) > a"
    )
      .should(
        "have.attr",
        "href",
        "/guides/end-to-end-testing/testing-your-app"
      )
      .and("have.text", "Testing Your App")
      .click();
    cy.get("div[class='headerWrapper_tu51'] h1")
      .should("not.be.empty")
      .and("have.text", "Testing Your App");
    cy.get("a.table-of-contents__link.toc-highlight")
      .eq(2)
      .should("have.attr", "href", "#Step-3-Configure-Cypress")
      .and("have.text", " Step 3: Configure Cypress")
      .click();

    cy.url().should("include", "/testing-your-app#Step-3-Configure-Cypress");
  });

  it("Search in the site documentation", () => {
    cy.get("astro-island + a:nth-child(3)").click();
    cy.get(".DocSearch-Button-Placeholder").should("be.visible").click();
    cy.get("#docsearch-input")
      .should("be.visible")
      .and("have.id", "docsearch-input")
      .type("Getting Started");
    cy.get("div .DocSearch-Hit-title").eq(0).click();
    cy.get("#Create-a-Cypress-Cloud-account")
      .should("be.visible")
      .and("have.id", "Create-a-Cypress-Cloud-account");
  });
});
