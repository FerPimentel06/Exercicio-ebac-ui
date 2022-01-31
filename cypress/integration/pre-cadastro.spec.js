/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
    
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@nanda03')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Teste')
        cy.get('#account_last_name').type('Testando')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso.")
    });
});
