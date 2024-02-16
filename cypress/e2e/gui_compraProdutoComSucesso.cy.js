/// <reference types="CYPRESS"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    before('Iniciar login', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.product_label').should('contain','Products') 

    });
    it('Fluxo da compra de produtos', () => {
        //Ordenação de produtos de menor para maior valor
        //Validação da ordenação dos produtoss:
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get(':nth-child(1) > .inventory_item_label').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(4) > .inventory_item_label').should('contain','Test.allTheThings() T-Shirt (Red)')
        cy.get(':nth-child(5) > .inventory_item_label').should('contain','Sauce Labs Backpack')
        cy.get(':nth-child(6) > .inventory_item_label').should('contain','Sauce Labs Fleece Jacket')
        //add ao carrinho
        cy.contains('Sauce Labs Onesie').click() //produto 1
        cy.get('.btn_primary').click() // '.'' chama classe e '#' chama id
        /*cy.get('.inventory_details_back_button').click() --> não há como retornar, pois o botão 'back' não responde, então foi realizado os testes com os demais produtos 
        usando outro botão que está no carrinho */
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_footer > .btn_secondary').click()
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#item_0_title_link > .inventory_item_name').click() //produto 2
        cy.get('.btn_primary').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_footer > .btn_secondary').click()
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#item_1_title_link > .inventory_item_name').click() //produto 3
        cy.get('.btn_primary').click()
        //checagem da quantidade de produtos adicionados ao carrinho
        cy.get('#shopping_cart_container').should('have.text', '3') //utilizar o have.text que exige que o valor declarado seja idêntico
        cy.get('.fa-layers-counter').click()
        //checagem no carrinho
        cy.verificarProdutos()
        //checkout:
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Último Nome')
        cy.get('[data-test="postalCode"]').type('Código Postal')
        cy.get('.btn_primary').click()
        //verificando os produtos do checkout:overview
        cy.verificarProdutos()
        //validar o valor total:
        cy.get('.summary_subtotal_label').should('have.text','Item total: $33.97')
        //concluir  
        cy.get('.btn_action').click() 
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')  
    });
});