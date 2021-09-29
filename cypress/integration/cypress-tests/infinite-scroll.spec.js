/// <reference types="cypress" />

describe("Drag and Drop", () => {
    const SCROLL_TIMES = 10;

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/infinite_scroll")
    })

    it('should drag and drop elements', () => {

        for(const _ of Array(SCROLL_TIMES)){
            cy.get('.jscroll-inner .jscroll-added').its('length').then(value => {
                cy.get('.jscroll-inner .jscroll-added').last().should('exist').scrollIntoView()
                cy.wait(1000)
                cy.get('.jscroll-inner .jscroll-added').its('length').should('be.greaterThan', value)
            })

        }

    })


})

