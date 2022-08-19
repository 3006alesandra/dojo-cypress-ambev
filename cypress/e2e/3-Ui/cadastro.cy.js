/// <reference types ="cypress" />

context('Cadastro', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
        cy.get('[data-test="register-name"]').type('ALESANDRA VOLTOLINI')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('alesandra.voltolini@hotmail.com')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Av221180')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-submit"]').click()
    })

    ///Cenário

    it.only('Devo validar mensagem quando cadastrar com o e-mail repetido', () => {
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')

        cy.get('[data-test="register-name"]').type('Renato Santana')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('renatosantana04@dojo.com.br')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-submit"]').click()

        // verificacao da mensagem
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    })

})

