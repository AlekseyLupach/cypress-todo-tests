describe("App initialization", () => {
  it("Loads todos on page load", () => {
    cy.seedAndVisit()

    cy.get(".todo-list li").should("have.length", 4);
  });

  it ("Display an error on failure", () => {
      cy.server()
      cy.route({
          url: "/api/todos",
          method: "GET",
          status: 200,
          response: {}
      })
      cy.visit('/')

      cy.get(".todo-list li")
        .should("not.exist")
      
      cy.get(".error")
        .should('be.visible')  
  })
}); 