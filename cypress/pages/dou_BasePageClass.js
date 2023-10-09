import { navigationBarMenu } from "./dou_NavigationBarClass";

export class BasePage {
  constructor() {
    this.mainElement = "body";
  }

  visitToPage() {
    cy.visit("https://dou.ua/");
  }

  verifyElements() {
    cy.get(this.mainElement()).should("be.visible");
    navigationBarMenu.getLogoElement();
  }
}
export const basePage = new BasePage();
