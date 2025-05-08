describe("Transaction History", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get('input[placeholder="Email"]').type("murad@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get("button").contains("Sign In").click();
    cy.url().should("include", "/dashboard");
  });

  it("views the transaction history", () => {
    cy.contains("View History").click();

    cy.contains("Transaction History");
    cy.get("table").should("exist");
    cy.get("tr").should("have.length.greaterThan", 1);
  });
});
