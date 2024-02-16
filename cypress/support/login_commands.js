/// <reference types="CYPRESS"/>

Cypress.Commands.add('login_teste',(user,password)=>{  //Cypress.Commands.add é uma função no qual se adiciona comandos personalizados
    // 'login_teste é o nome desse comando para convocar
    // user e password são os parâmetros

    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password) 
    cy.get('#login-button').click()

})