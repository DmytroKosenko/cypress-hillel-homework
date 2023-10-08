export class NavigationBarMenu {
  constructor() {
    this.headerElement = "body > div.g-page > header";
    this.sectionsLogoElement = "header.b-head";
  }

  getMainLogoElement() {
    cy.get(this.headerElement).find("ul > li").eq(0);
  }

  getSectionsLogoElement() {
    cy.get(this.sectionsLogoElement).find(".logo");
  }

  switchToSalaryPage() {
    cy.get(this.headerElement).find("ul > li").eq(4).click();
  }

  switchToWorkPage() {
    cy.get(this.headerElement).find("ul > li").eq(5).click();
  }

  goIntoSearchField() {
    cy.get(this.headerElement).find("#txtGlobalSearch").click();
  }
  goToLoginLink() {
    cy.get(this.headerElement).find("#login-link").click();
  }
}

export const navigationBarMenu = new NavigationBarMenu();
