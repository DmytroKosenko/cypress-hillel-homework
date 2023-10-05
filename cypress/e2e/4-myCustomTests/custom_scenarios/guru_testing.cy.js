/// <reference types="cypress" />
import MainPage from "../../../pages/main";
import PostmanPage from "../../../pages/postman-page";
import { global_data } from "../../../data/global_text";

describe("Testing Guru Website", () => {
  const mainpage = new MainPage();
  const postmanPage = new PostmanPage();

  beforeEach(() => {
    // cy.visit('https://www.guru99.com')
    // cy.setCookie('authCoka', 'someCookie')
    cy.loginAndSetCookie("/", "authCoka", "someCookie");
  });

  it("Open the website", () => {
    cy.get("h1.thick-heading", { timeout: 6000 }).should("be.visible"); //add timeout to concrete element to wait him
    cy.wait(4000);
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

  it.skip("Click on softwear testing variant from drop-down list", () => {
    cy.get("#primary-menu span.nav-drop-title-wrap").eq(0).click();
    // cy.get('a[aria-current="page"] + ul.sub-menu.clicked').should('be.visible') doesn't work
    cy.get("ul.sub-menu.clicked li")
      .eq(7)
      .find("a")
      .should("have.attr", "href", "/software-testing.html")
      .and("have.text", "Software Testing", { timeout: 5000 }) //add timeout to concrete element to wait him
      .click();
    cy.get("div.code-block-1 + h2")
      .should("contain", "Software Testing Training Summary")
      .and("have.css", "margin-top", "0px");
    cy.getAllCookies("").should("exist");

    // cy.get("p strong").then(($textFundamentalsElement) => {
    //   $textFundamentalsElement.text();
    //   cy.wait($textFundamentalsElement);
    // });
    // cy.intercept("GET", "/software-testing").as("@pageForSoftwareTesting");
    // cy.wait("@pageForSoftwareTesting");

    cy.get("p strong")
      .eq(1)
      .then(($textFundamentalsElement) => {
        cy.wrap($textFundamentalsElement).should(
          "contain.text",
          "Testing Fundamentals"
        );
        debugger;
      });
  });

  //types of debugger and logger
  it.skip("Open the software from main page", () => {
    cy.get("a[title='Software Testing']").then(($linkMainPage) => {
      debugger;
    });
  });
  it.skip("Open the software from main page", () => {
    //cy.get("a[title='Software Testing']").debug();
    cy.get("a[title='Software Testing']");
    cy.log("Open the Software Testing section");
    cy.get("h2").pause();
    cy.task("LOG_INFO", "Another log info message");
    cy.get("table.table").eq(0).pause();
  });

  it("Click on Postman linck from drop-down list POM", () => {
    mainpage.dropDownList().eq(0).click().pause();
    mainpage
      .elementInDropDownList()
      .eq(16)
      .should("have.text", global_data.postman_text)
      .click();
    postmanPage.imageWithPostmanDetails({ timeout: 8000 }).should("be.visible");
  });
});
