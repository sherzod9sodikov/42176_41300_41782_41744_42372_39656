describe("Currency exchange flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get('input[placeholder="Email"]').type("murad@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get("button").contains("Sign In").click();
    cy.url().should("include", "/dashboard");
    cy.contains("Exchange Money").click();
  });

  it("exchanges USD to EUR", () => {
    cy.get("select").first().select("USD");
    cy.get("select").eq(1).select("EUR");
    cy.get('input[type="number"]').clear().type("10");
    cy.wait(500);
    cy.get("button")
      .contains(/^Convert$/)
      .click();
    cy.wait(1000);
    cy.contains("Exchange and Save").click();
  });
});
