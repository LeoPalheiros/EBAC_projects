/// <reference types="cypress" />

describe('Testes para Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Teste Cypress')
        cy.get('input[placeholder="E-mail"]').type('teste@cypress.com')
        cy.get('input[placeholder="Telefone"]').type('11999999999')

        cy.get('.adicionar').click()

        cy.get('.sc-iAEyYk .contato').should('contain', 'Teste Cypress')
        cy.get('.sc-iAEyYk .contato').should('contain', 'teste@cypress.com')
    })

    it('Deve editar um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('input[placeholder="Nome"]').clear().type('Editado Cypress')
        cy.get('.alterar').click()

        cy.get('.sc-iAEyYk .contato').should('contain', 'Editado Cypress')
    })

    it('Deve deletar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk .contato').should('not.contain', 'Editado Cypress')
    })
})
