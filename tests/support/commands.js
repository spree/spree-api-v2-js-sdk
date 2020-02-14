// Source: https://github.com/cypress-io/cypress/issues/3199
Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message))