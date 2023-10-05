import { users } from "../../../data/search_text";

for (const { id, searchValue } of users) {
  it(`${id} check search`, () => {
    cy.visit("/");
    cy.get("input#txtGlobalSearch").click().type(`${searchValue}{enter}`);
    cy.url().should("contain", searchValue);
  });
}
