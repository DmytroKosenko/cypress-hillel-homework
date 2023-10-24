/// <reference types="cypress" />

describe("Login with API request", () => {
  beforeEach(() => {
    cy.loginAndSetLocalStorage();
  });

  it("send login data", () => {
    cy.visit("/overview");
    cy.get("div.card-content").eq(0).should("be.visible");
  });
});

// cy.request({
//   method: 'POST',
//   url: '/api/auth/login',
//   body: {
//       email: 'email@dmytro.com',
//       password: 'abc123'
//   },
// }).
// // then((response) => {
// //     fs.writeFileSync('check_token.json', JSON.stringify(response))
// // })
// then((response) => {
//   const accessToken = response.body.token;
//   // Store the access token in local
//   localStorage.setItem('auth-token', accessToken);
// });
