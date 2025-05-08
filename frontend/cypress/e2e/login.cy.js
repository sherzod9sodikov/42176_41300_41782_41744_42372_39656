describe("Sign In Flow", () => {
  it("logs in successfully", () => {
    cy.visit("http://localhost:5173");
    cy.get('input[placeholder="Email"]').type("murad@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get("button").contains("Sign In").click();

    cy.url().should("include", "/dashboard");
    cy.contains("Virtual Currency Exchange");
  });
});
