// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// HomePage Commands
Cypress.Commands.add('accessHomePage', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a.logo')
        .should('be.visible')
})

Cypress.Commands.add('checkItemsOnFeaturedSection', (totalItemsBySection) => {
    cy.visit('https://automationteststore.com/')
        cy.get('#featured .prdocutname')
            .should('have.length', totalItemsBySection)
})

Cypress.Commands.add('checkItemsOnLatestSection', (totalItemsBySection) => {
    cy.visit('https://automationteststore.com/')
        cy.get('#latest .prdocutname')
            .should('have.length', totalItemsBySection)
})

Cypress.Commands.add('checkItemsOnBestsellersSection', (totalItemsBySection) => {
    cy.visit('https://automationteststore.com/')
        cy.get('#bestseller .prdocutname')
            .should('have.length', totalItemsBySection)
})

Cypress.Commands.add('checkItemsOnSpecialsSection', (totalItemsBySection) => {
    cy.visit('https://automationteststore.com/')
        cy.get('#special .prdocutname')
            .should('have.length', totalItemsBySection)
})

Cypress.Commands.add('checkItemsOnFooterSection', (labels) => {
    cy.visit('https://automationteststore.com/')
    cy.get('.footersocial h2').each((item, index, list) => {
        expect(Cypress.$(item).text()).to.eq(labels[index])
    })
})