export class NavigationMenu {
  constructor() {
    this.mainElement = "#container > div.header > header";
  }
  verifyElements() {
    cy.get(this.mainElement).should("be.visible");
  }
}

export const navigationMenu = new NavigationMenu();
