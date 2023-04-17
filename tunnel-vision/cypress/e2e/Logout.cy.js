describe('Logout Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/login');
        
        cy.intercept( //figure out how to make this work.
            'http://localhost:3000/auth/*',
            { middleware: true },
            (req) => {
            req.on('before:response', (res) => {
                // force all API responses to not be cached
                res.headers['cache-control'] = 'no-store'
            })
            }
        )
    });

    it('allows successful logout', function () {
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();

        cy.url().should('include', '/home')  ;
        cy.contains('Logout').click();

        cy.getByData('message').should('exist').contains('You are officially out!');
    });

    //TODO: Fix failure to mock failed logout response
    xit('shows failed logout',() => {
        cy.intercept('http://localhost:3001/auth/logout', { data: {
            message: 'an error occurred',
            isLoggedIn: null
        }}).as('logout');
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();

        cy.contains('Logout').click();

        cy.getByData('message').should('exist').contains('I messed up, we\'ll need to try again!');
    });
});
