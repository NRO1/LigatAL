/// <reference types="Cypress" />


describe('Ligat-al web testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have title', () => {
    cy.wait(200)
    cy.get('[data-cy="main_title"').contains("ליגת העל")
  })
})