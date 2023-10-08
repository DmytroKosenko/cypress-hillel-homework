import { BasePage } from "./dou_BasePageClass";
import { navigationBarMenu } from "./dou_NavigationBarClass";
import { salaryPage } from "./dou_SalaryPagesClass";
import { workPage } from "./dou_WorkPageClass";

export class DouMainPage extends BasePage {
  constructor() {
    super();
    this.mainPageElement = "body > div.g-page";
  }
  verifyMainPageElements() {
    cy.get(this.mainPageElement).should("be.visible");
  }

  verifyLogoElementOnMainPage() {
    navigationBarMenu.getMainLogoElement();
  }

  verifyLogoElementOnSectionsPage() {
    navigationBarMenu.getSectionsLogoElement();
  }

  openWorkPage() {
    navigationBarMenu.switchToWorkPage();
    workPage.verifyWorkElements();
  }
  openSalaryPage() {
    navigationBarMenu.switchToSalaryPage();
    salaryPage.verifySalaryTableElement();
  }
}

export const douMainPage = new DouMainPage();
