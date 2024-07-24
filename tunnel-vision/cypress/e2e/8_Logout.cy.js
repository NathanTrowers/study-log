describe('Logout Page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('allows successful logout', function () {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();

        cy.url().should('include', '/home')  ;
        cy.contains('Logout').click();

        cy.getByData('message').should('exist').contains('You are officially out!');
        cy.url().should('include', '/login')  ;
    });
});
