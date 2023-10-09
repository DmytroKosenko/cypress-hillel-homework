import { NavigationBarMenu } from "./dou_NavigationBarClass";

export class WorkPage extends NavigationBarMenu {
  constructor() {
    super();
    this.mainHeaderSearchElement = "#container > div.header";
    this.mainWorkElement = "#container > div.jobs-page";
  }

  verifyWorkElements() {
    super.getSectionsLogoElement();
    cy.get(this.mainWorkElement).find("div.table.m-db").should("be.visible");
  }
  verifySearchInputFieldElement() {
    super.getSectionsLogoElement();
    cy.get(this.mainHeaderSearchElement)
      .find("div.b-sub-head-n > div.b-jobs-search > form > span > input")
      .should("be.visible");
  }
}

export const workPage = new WorkPage();
