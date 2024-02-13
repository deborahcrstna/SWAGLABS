/// <reference types="CYPRESS"/>


// 'describe' é usado para representar um cenário de teste.
describe('Teste funcional de Login', () => {
    // 'it' é usado para definir um caso de teste individual
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce") 
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain','Products')   // Depois de logar com sucesso, faz-se uma Asserção para verificar se o login foi bem sucedido.
    });
    it('Validando um login incorreto', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("validando_user")
        cy.get('[data-test="password"]').type("secret_sauce") 
        cy.get('#login-button').click() 
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this servic') // validando mensagem
    });
   
    it('Validando uma senha incorreta', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_key") 
        cy.get('#login-button').click() 
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this servic') // validando mensagem

    });
});
