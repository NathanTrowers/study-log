describe('Study Session and New Log Pages', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.url().should('include', '/home')  ;
    });

    //NOTE: Manually DELETE the log from the database after each test.
    it('starts a 10 second study session then saves a new log',() => {
        cy.contains('Start Studying').click();
        cy.url().should('include', '/study-session');
        
        cy.wait(10000);
        cy.contains('Stop Studying').click();

        cy.getByData('subject-input').type('MEAN Stack Web Development');
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the Angular.js portion\'s unit tests!');
        cy.getByData('rated-understanding-input').type('8');
        cy.getByData('duration-input').should('be.disabled');
        cy.getByData('start-time-input').should('be.disabled');
        cy.getByData('end-time-input').should('be.disabled');

        cy.contains('Create New Log').click();
        cy.getByData('message').should('exist').contains('Another log\'s been added to the pile!');

        cy.url().should('include', '/home');
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;

        cy.getByData('search-bar-input').type('MEAN');
        cy.getByData('subject-name').should('exist').contains('Subject: MEAN Stack Web Development');

    });

    it('shows a validation error message when the subject name format is wrong', () => {
        cy.contains('Start Studying').click();
        cy.url().should('include', '/study-session');
        
        cy.wait(10000);
        cy.contains('Stop Studying').click();

        cy.getByData('subject-input').type('MEAN Stack Web Development "injectionAttack": "malice"');
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the Angular.js portion\'s unit tests!');
        cy.getByData('rated-understanding-input').type('8');

        cy.contains('Create New Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('shows a validation error message when the Details format is wrong', () => {
        cy.contains('Start Studying').click();
        cy.url().should('include', '/study-session');
        
        cy.wait(10000);
        cy.contains('Stop Studying').click();

        cy.getByData('subject-input').type('MEAN Stack Web Development');
        cy.getByData('details-input').type('`Project scaffolding complete. Also did setup for the Angular.js portion\'s unit tests!`');
        cy.getByData('rated-understanding-input').type('8');

        cy.contains('Create New Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('shows a validation error message when the rated understanding format is wrong', () => {
        cy.contains('Start Studying').click();
        cy.url().should('include', '/study-session');
        
        cy.wait(10000);
        cy.contains('Stop Studying').click();

        cy.getByData('subject-input').type('MEAN Stack Web Development');
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the Angular.js portion\'s unit tests!');
        cy.getByData('rated-understanding-input').type('A');

        cy.contains('Create New Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });
});
