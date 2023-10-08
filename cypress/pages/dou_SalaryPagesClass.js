import { NavigationBarMenu } from "./dou_NavigationBarClass";

export class SalaryPage extends NavigationBarMenu {
  constructor() {
    super();
    this.mainSalaryElement =
      "#container > div.content-wrap > div > div.row.m-db > div.cell.m-db";
  }
  verifySalaryTableElement() {
    super.getSectionsLogoElement();
    cy.get(this.mainSalaryElement)
      .find("div[id='dws-charts'] div[class='wrapper']")
      .should("be.visible");
  }
}

export const salaryPage = new SalaryPage();
