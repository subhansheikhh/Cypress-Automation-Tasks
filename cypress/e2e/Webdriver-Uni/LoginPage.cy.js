

describe("Login Portal", () => {
    it("Should login with multiple users", () => {
      cy.fixture("credentials").then((logincredentials) => {
        logincredentials.forEach((cred) => {
          cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
          cy.get("#text").type(cred.username);
          cy.get("#password").type(cred.password);
          cy.get("#login-button").click();
        })
      })
    })
  })