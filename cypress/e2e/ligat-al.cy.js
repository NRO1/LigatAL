/// <reference types="Cypress" />


describe('Ligat-al web testing', () => {
  it('should have title', () => {
    cy.visit("/")
    cy.wait(200)
    cy.get('div').should('have.class',"App")
    cy.get('div').should('have.class',"Nav_g_container__+qeC3").should("have.length", 12)
  })
})