///<reference types="Cypress" />

const URL = "127.0.0.1:8080";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

describe('Test', () => {
    before(() => {
        cy.visit(URL);
    })

    it('test', () =>{
        cy.get('#precio').type('10 {enter}');
        cy.get('#resultado').should('have.text', '16.5');
    })
})
