/// <reference types="Cypress" />


describe('Ligat-al web testing', () => {

  it('should have title', () => {
    cy.visit("https://ec2-3-69-9-45.eu-central-1.compute.amazonaws.com")
    cy.wait(200)
    cy.get('#main_title').contains("ליגת העל")
  })
})