//additional task: create a scenario with ten steps on the website you want (REQUIRED STEPS: filling search text, and checking search results) → text for search use from json file

/// <reference types="cypress" />

describe("Possible to find Washing machine from list", () => {
  it("My first Cypress test", () => {
    cy.visit("https://rozetka.com.ua/ua/");

    //input text to Search field from .json file
    cy.readFile("searchData_LG.json").then((json) => {
      cy.get("input[placeholder='Я шукаю...']").type(json.LG_F2V3HS7WW);
    });

    cy.get(".search-suggest__item-content.search-suggest__show-all")
      .contains("Всі результати пошуку →")
      .click();

    cy.url().should("include", "/?text=F2V3HS7WW");

    cy.get("h2[class='search-heading ng-star-inserted'] span").contains(
      "F2V3HS7WW"
    );

    cy.get(
      "body > app-root > div > div > rz-search > rz-catalog > div > div.layout.layout_with_sidebar > section > rz-grid > ul > li:nth-child(1) > rz-catalog-tile > app-goods-tile-default > div > div.goods-tile__inner > a.goods-tile__heading.ng-star-inserted"
    ).click();

    cy.get(
      "button[class='buy-button button button--with-icon button--green button--medium buy-button--tile ng-star-inserted']"
    )
      .contains("Купити")
      .click();

    cy.get(".modal__heading").contains("Кошик");

    cy.get("a[title='Пральна машина вузька LG F2V3HS7WW']").contains(
      "Пральна машина вузька LG F2V3HS7WW"
    );

    cy.get(
      "body > app-root > rz-single-modal-window > div.modal__holder.modal__holder_show_animation.modal__holder--large > div.modal__content > rz-shopping-cart > div > div.cart-footer.ng-star-inserted > div > rz-checkout-button > a"
    ).click();

    cy.url().should("include", "/checkout");

    cy.get(".checkout-heading.ng-star-inserted").contains(
      "Оформлення замовлення"
    );

    cy.get(".checkout-product__title").contains(
      "Пральна машина вузька LG F2V3HS7WW"
    );
  });
});
