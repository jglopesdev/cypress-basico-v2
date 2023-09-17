Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Joao')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('jgsantanalopes@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})
