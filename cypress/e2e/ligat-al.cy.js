/// <reference types="Cypress" />


describe('Ligat-al web testing', () => {
  it('should have main DIV', () => {
    cy.visit("/")
    cy.wait(400)
    cy.get('div').should('have.class',"App")
  })

  it('should have group selection', () => {
    cy.visit("/")
    cy.get('div').should('have.class',"Nav_g_container__+qeC3").should("have.length", 12)
  })
})