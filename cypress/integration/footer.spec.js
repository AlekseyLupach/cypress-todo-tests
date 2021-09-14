describe("Footer", () => {
  context("with a single todo", () => {
    it("display a singular todo in count", () => {
      cy.seedAndVisit([{ id: 1, name: "Buy milk", isCompete: false }]);
      cy.get(".todo-count").should("contain", "1 todo left");
    });
  });

  context("with multiple todos", () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it("displays plural todos in count", () => {
      cy.get(".todo-count").should("contain", "3 todos");
    });

    // it("Filter to active todos", () => {
    //     cy.contains("Active")
    //         .click()
    //     cy.get(".todo-list li")
    //         .should("have.length", 3)
    // })

    // it("Filter to completed todos", () => {
    //     cy.contains("Completed")
    //         .click()
    //     cy.get(".todo-list li")
    //         .should("have.length", 1)
    // })

    it("Handles filter links", () => {
      const filters = [
        { link: "Active", expectedLength: 3 },
        { link: "Completed", expectedLength: 1 },
      ];
      cy.wrap(filters).each((filter) => {
        cy.contains(filter.link)
            .click();
        cy.get(".todo-list li")
            .should("have.length", filter.expectedLength);
      });
    });
  });
});
