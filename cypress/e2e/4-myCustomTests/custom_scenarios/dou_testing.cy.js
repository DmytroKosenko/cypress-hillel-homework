import DouMainPage from "../../../pages/dou_MainPageClass";

describe("Testing DOU Website", () => {
  it("Open the website", () => {
    DouMainPage.visitToPage();
  });

  it("...", () => {
    DouMainPage.getLogoElement({ timeout: 2000 })
      .should("be.visible")
      .and("have.class", "logo");
  });
  it("...", () => {});
});
