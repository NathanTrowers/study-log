describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/login');
    });

    it('allows successful login',() => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();

        cy.getByData('message').should('exist').contains('Login successful! Welcome Studying Addict2');
    });

    it('blocks failed login when the email format is wrong', () => {
        cy.getByData('email-input').type('s.addict!@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });
    
    it('blocks failed login when the password field is blank', () => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.contains('Login').click();

        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });
    
    it('blocks failed login when the wrong password is entered', () => {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('wrangB@ng');
        cy.contains('Login').click();

        cy.getByData('message').should('exist').contains('Looks like something you entered is wrong. Try again.');
    });

    it('blocks failed login when the wrong username is entered', () => {
        cy.getByData('email-input').type('studySageWrongUser@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();

        cy.getByData('message').should('exist').contains('Looks like something you entered is wrong. Try again.');
    });
});
