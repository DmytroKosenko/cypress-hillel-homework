//fix the selector

/// <reference types="cypress" />

context("Location", () => {
  beforeEach(() => {
    cy.visit("https://ain.ua/");
  });

  it("cy.hash() - get the current URL hash", () => {
    // https://ain.ua/
    cy.hash().should("be.empty");
  });

  it("cy.location() - get window.location", () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq("https://ain.ua/");
      expect(location.host).to.eq("ain.ua");
      expect(location.hostname).to.eq("ain.ua");
      expect(location.origin).to.eq("https://ain.ua");
      expect(location.pathname).to.eq("/");
      expect(location.port).to.eq("");
      expect(location.protocol).to.eq("https:");
      expect(location.search).to.be.empty;
    });
  });

  it("cy.url() - get the current URL", () => {
    // https://ain.ua/
    cy.url().should("eq", "https://ain.ua/");
  });
});

context("Check the AIN website", () => {
  it("Open the main page and click Startup", () => {
    cy.visit("https://ain.ua/");
    cy.get("header[id='header'] button[type='button']").click();
    cy.get("li[id='menu-item-1123667'] a").click();
    cy.url().should("include", "startapy/");
  });
});

//additional task: create a scenario with ten steps on the website you want (REQUIRED STEPS: filling search text, and checking search results) → text for search use from json file
