describe('Sign-up Page', () => {
    beforeEach(() => {
        cy.visit('/sign-up');
    });

    //NOTE: Manually DELETE the user from the database after each test.
    it('allows successful registration',() => {
        cy.getByData('email-input').type('s.addict3@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.getByData('password-confirmation-input').type('bookworm');
        cy.getByData('username-input').type('Studying Addict 3');
        cy.contains('Sign-up').click();

        cy.getByData('message').should('exist').contains('You\'re registered and ready to check in!');

        cy.url().should('include', '/login');
    });

    it('blocks failed registration when the email format is wrong', () => {
        cy.getByData('email-input').type('s.addict!@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.getByData('password-confirmation-input').type('bookworm');
        cy.getByData('username-input').type('Studying Addict 3');
        cy.contains('Sign-up').click();
        
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });
    
    it('blocks failed registration when the password field is blank', () => {
        cy.getByData('email-input').type('s.addict3@test.com');
        cy.getByData('password-confirmation-input').type('bookworm');
        cy.getByData('username-input').type('Studying Addict 3');
        cy.contains('Sign-up').click();

        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });
      
    it('blocks failed registration when the wrong password format is entered', () => {
        cy.getByData('email-input').type('s.addict3@test.com');
        cy.getByData('password-input').type('bookwo_rm');
        cy.getByData('password-confirmation-input').type('bookworm');
        cy.getByData('username-input').type('Studying Addict 3');
        cy.contains('Sign-up').click();

        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('blocks failed registration when the wrong username format is entered', () => {
        cy.getByData('email-input').type('s.addict3@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.getByData('password-confirmation-input').type('bookworm');
        cy.getByData('username-input').type('Studying Addict!');
        cy.contains('Sign-up').click();

        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('blocks failed registration when the password and password confirmation entered do not match', () => {
        cy.getByData('email-input').type('s.addict3@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.getByData('password-confirmation-input').type('matchless');
        cy.getByData('username-input').type('Studying Addict!');
        cy.contains('Sign-up').click();

        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('shows that the info icons work', async () => {
        let infoIcons = await cy.get('.infoIcon');
        cy.wrap(infoIcons[0]).contains('Only letters, numbers, \'@\', \'.\' and \'-\' are allowed. \n Ex: name@example.com');
        cy.wrap(infoIcons[1]).contains('Only letters, numbers, \'@\', \'.\', \'!\', \'?\' and \'-\' are allowed. \n Ex: Example!123');
        cy.wrap(infoIcons[2]).contains('This must match the above password entered.');
        cy.wrap(infoIcons[3]).contains('Only letters and numbers, spaces and hyphens (-) are allowed.' + ' The name must be at least three characters long. Ex: Example Name');
    });
});
