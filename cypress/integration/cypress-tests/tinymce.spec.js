/// <reference types="cypress" />

describe("Tinymce Formatting", () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
    })

    it('should make text bold', () => {
        const editor = getIframeBody()
        editor.should('exist')
        editor.should('have.text', 'Your content goes here.')
        editor.type('{selectall}').type('{backspace}')
        editor.type('My name is Khan.')
        editor.should('include.text', 'My name is Khan.')
        editor.type('{ctrl+a}').type('{ctrl+b}')

        editor.find('p strong').should('exist').should('have.text', 'My name is Khan.')
    })

    it('should make text italic', () => {
        const editor = getIframeBody()
        editor.should('exist')
        editor.should('have.text', 'Your content goes here.')
        editor.type('{selectall}').type('{backspace}')
        editor.type('My name is Khan.')
        editor.should('include.text', 'My name is Khan.')
        editor.type('{ctrl+a}').type('{ctrl+i}')

        editor.find('p em').should('exist').should('have.text', 'My name is Khan.')
    })

})

const getIframeBody = () => {
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}

const getIframeDocument = () => {
    return cy
        .get("iframe.tox-edit-area__iframe")
        .its('0.contentDocument').should('exist')
}
