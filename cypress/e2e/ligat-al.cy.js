/// <reference types="Cypress" />


describe('Ligat-al web testing', () => {
  it('should have title', () => {
    cy.visit("/")
    cy.wait(200)
    cy.get('[data-cy="main_title"]').contains("ליגת העל")
    cy.get('[data-cy="list"]').should("have.length", 12)
  })
})