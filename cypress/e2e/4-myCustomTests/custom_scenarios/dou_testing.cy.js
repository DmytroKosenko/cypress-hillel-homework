import { basePage } from "../../../pages/dou_BasePageClass";
import { douMainPage } from "../../../pages/dou_MainPageClass";
import { workPage } from "../../../pages/dou_WorkPageClass";

describe("Testing DOU Website", () => {
  beforeEach(() => {
    basePage.visitToPage({ timeout: 3000 });
  });

  it("Open the website", () => {
    douMainPage.verifyLogoElementOnMainPage();
  });

  it("Click on Work link in header and find out Kyiv vacancies", () => {
    douMainPage.openWorkPage();
    workPage.verifySearchInputFieldElement();
    cy.get(
      "#container > div.header div.b-sub-head-n > div.b-jobs-search > form > span > input"
    ).type("Software Testing{enter}");
    cy.get("div[class='b-inner-page-header'] h1").should("be.visible");
    cy.get("div.l-items").should("be.visible").and("have.id", "vacancyListId");
    cy.get(
      "div.cell div.b-region-filter ul:nth-child(5) li:nth-child(1)"
    ).click();
    cy.url().should("contain", "/?search=Software+Testing");
  });

  it("Click on Salary link in header and filter by Trainee", () => {
    douMainPage.openSalaryPage();
    cy.get("div[id='dd-position'] div[class='value']")
      .should("be.visible")
      .click();
    cy.get(
      "#dd-position > div.options-list > div:nth-child(1) > div.positons-list > div:nth-child(1)"
    ).click();
  });
});
