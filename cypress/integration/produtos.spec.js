/// <reference types="cypress" />

describe('Funcionalidade Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            //.contains('Beaumont Summit Kit')
            .eq(7)
            .click()
    });

    it.only('Deve Adicionar um Produto ao Carrinho', () => {
        var quantidade = 6

        cy.get(':nth-child(4) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
        .contains('Gobi HeatTec® Tee').click()

        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Gobi HeatTec® Tee” foram adicionados no seu carrinho.')
        
    });
});