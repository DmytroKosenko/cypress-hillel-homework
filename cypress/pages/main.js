export default class MainPage {
  dropDownList() {
    return cy.get("#primary-menu span.nav-drop-title-wrap");
  }
  elementInDropDownList() {
    return cy.get("cy.get('ul.sub-menu.clicked li')");
  }
}
