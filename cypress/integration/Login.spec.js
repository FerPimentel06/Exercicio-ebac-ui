/// <reference types="cypress" />
var faker = require('faker');

context('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('teste.alou12@ebac.com')
        cy.get('#password').type('teste@2021')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
    });

    it('Deve exibir uma mensagem E-mail invalido ou desconhecido', () => {
        cy.get('#username').type('teste.ebac@teste.com')
        cy.get('#password').type('Ebac@2021')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de senha incorreta', () => {
        cy.get('#username').type('teste.alou12@ebac.com')
        cy.get('#password').type('teste1@2021')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'A senha fornecida para o e-mail')
    });
});