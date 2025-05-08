describe("Send money flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get('input[placeholder="Email"]').type("murad@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get("button").contains("Sign In").click();
    cy.url().should("include", "/dashboard");
    cy.contains("Send Money").click();
  });

  it("sends money to a user", () => {
    cy.get('input[placeholder="Search users by name..."]').type("receiver");
    cy.wait(1000);
    cy.contains("receiver", { matchCase: false }).click();

    cy.get("select").select("USD");
    cy.get('input[type="number"]').clear().type("10");

    cy.get("button").contains("Confirm").click();
  });
});
