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
//Preenche Requisição - Aba Produto
Cypress.Commands.add(
    "typeInCategory",
    (name, code) => {
        cy.get("#category-name").clear().type(name);
        cy.get("#category-code").clear().type(code);
    }
);
Cypress.Commands.add(
    "addCategory",
    (name, code) => {
        cy.get('a[href="addCategory.php"]').click();
    cy.typeInCategory(name, code);
    cy.get('input[type="submit"]').click();
    cy.get(".success",{timeout : 1000}).should("contain", "Operation performed successfully!");
    }
);
