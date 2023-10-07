class DouMainPage {
  visitToPage() {
    cy.visit("https://dou.ua");
  }

  getLogoElement() {
    return cy.get("body > div.g-page > header > ul > li.logo");
  }

  getSomeElement() {}

  getSomeElement() {}
}

export default new DouMainPage();
