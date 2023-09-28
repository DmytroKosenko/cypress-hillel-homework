/// <reference types="cypress" />

describe("Testing Guru Website", () => {
  beforeEach(() => {
    // cy.visit('https://www.guru99.com')
    // cy.setCookie('authCoka', 'someCookie')
    cy.loginAndSetCookie("/", "authCoka", "someCookie");
  });

  it("Open the website", () => {
    cy.get("h1.thick-heading").should("be.visible");
  });

  it.skip("check search and validate results", () => {
    cy.get("button.search-toggle-open")
      .should("be.visible")
      .and("have.attr", "data-toggle-target", "#search-drawer")
      .click();
    cy.get("input.search-field")
      .should("be.visible")
      .and("have.attr", "type", "search")
      .type("functional testing{enter}");
    cy.url().should("contain", "/search_gcse?q=functional+testing");
    cy.get("div#resInfo-0").should("not.be.empty").and("contain", "About");
  });

  it("Click on softwear testing variant from drop-down list", () => {
    cy.get("#primary-menu span.nav-drop-title-wrap").eq(0).click();
    // cy.get('a[aria-current="page"] + ul.sub-menu.clicked').should('be.visible') doesn't work
    cy.get("ul.sub-menu.clicked li")
      .eq(7)
      .find("a")
      .should("have.attr", "href", "/software-testing.html")
      .and("have.text", "Software Testing")
      .click();
    cy.get("div.code-block-1 + h2")
      .should("contain", "Software Testing Training Summary")
      .and("have.css", "margin-top", "0px");
    cy.getAllCookies("").should("exist");
  });
});
