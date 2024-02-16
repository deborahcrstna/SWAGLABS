/// <reference types="CYPRESS"/>


// 'describe' é usado para representar um cenário de teste.
describe('Teste funcional de Login', () => {
    // 'it' é usado para definir um caso de teste individual
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.product_label').should('contain','Products')   // Depois de logar com sucesso, faz-se uma Asserção para verificar se o login foi bem sucedido.
    });
    it('Validando um login incorreto', () => {
        cy.login_teste('erro_user','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this servic') // validando mensagem
    });
   
    it('Validando uma senha incorreta', () => {
        cy.login_teste('standard_user','error_password')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this servic') // validando mensagem

    });
});
