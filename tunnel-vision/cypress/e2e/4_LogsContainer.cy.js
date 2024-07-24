describe('Logs Page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('shows all logs',() => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.url().should('include', '/home')  ;
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;

        cy.getByData('subject-name').should('exist').contains('Subject: MERN Stack Web Dev');
    });

    it('shows no logs due to search query used', () => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.url().should('include', '/home')  ;
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;

        cy.getByData('search-bar-input').type('word');
        cy.getByData('logs-section').should('be.empty');
    });
  
    it('shows only one result', () => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.url().should('include', '/home')  ;
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;

        cy.getByData('search-bar-input').type('MERN');
        cy.getByData('subject-name').should('exist').contains('Subject: MERN Stack Web Dev');
    });
});
