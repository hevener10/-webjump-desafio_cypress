/// <reference types="cypress" />


// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Acessa a aplicação', () => {
  it('Acessa a aplicação',() => {

    cy.visit("/");
  });
});

describe("Cadastro de Categorias", () => {

  
  it("Checa se abriu o Dashboard", () => {
    

    cy.get(".title",{timeout : 1000}).should("contain", "Dashboard");
  });
  it("Abre menu e clica em Categories", () => {
    cy.get(".go-menu > a",{timeout : 1000}).first().click();
    cy.get('a[href="categories.php"]',{timeout : 1000}).click();
    cy.get(".title",{timeout : 1000}).should("contain", "Categories");
  });
  it("Clica em Add new Category", () => {
    cy.get('a[href="addCategory.php"]').click();
    cy.typeInCategory("Teste", "TST");
    cy.get('input[type="submit"]').click();
    cy.get(".success",{timeout : 1000}).should("contain", "Operation performed successfully!");
  })
  
  it("Edita uma categoria", () => {
    cy.get('.edit > a').last().click();
    cy.typeInCategory("Informatica", "INF001");
    cy.get('input[type="submit"]').click();
    cy.get(".success",{timeout : 1000}).should("contain", "Operation performed successfully!");
  })
  it('Deleta uma catergoria', () => {
    cy.get('.delete > a').last().click();
    cy.get('input[type="submit"]').click();
    cy.get(".success",{timeout : 1000}).should("contain", "Operation performed successfully!");
  })
  it("Prepara base para cadastrar produtos", () => {
    cy.addCategory("Informatica", "INF001");
    cy.addCategory("Celulares", "CEL001");
    cy.addCategory("Eletrodomesticos", "ELE001");
    cy.addCategory("Games", "GAM001");
  })
  
});