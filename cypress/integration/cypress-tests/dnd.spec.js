/// <reference types="cypress" />

describe("Drag and Drop", () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
    })

    it('should drag and drop elements', () => {
        cy.get('#columns .column').eq(0).should('have.text', 'A')
        cy.get('#columns .column').eq(1).should('have.text', 'B')

        cy.get('#column-a').drag('#column-b')

        cy.get('#columns .column').eq(0).should('have.text', 'B')
        cy.get('#columns .column').eq(1).should('have.text', 'A')
    })

})
