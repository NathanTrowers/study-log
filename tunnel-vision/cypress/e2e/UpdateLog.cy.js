describe('Study Session and New Log Pages', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.wait(4500);
        cy.url().should('include', '/home');
    });

    it('edits a log then finds the modified version on the logs page',() => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;
    
        cy.getByData('subject-name').contains('MEAN Stack Web Development')
            .parent().contains('Update Log').click();

        cy.url().should('include', '/log/fe30bb44-6a64-409e-9258-2d995e7b4783') ;
        cy.getByData('subject-input').clear();
        cy.getByData('subject-input').type('MEANer Stack Web Development');
        cy.getByData('details-input').clear();
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the ANGULAR portion\'s unit tests!');
        cy.getByData('rated-understanding-input').clear();
        cy.getByData('rated-understanding-input').type('5');
        cy.contains('Update Log').click();

        cy.getByData('message').should('exist').contains('That log has been carried up(-to-date)!');

        cy.url().should('include', '/logs');
        cy.getByData('subject-name').contains('MEANer Stack Web Development');
    });

    it('shows a validation error message when the subject name format is wrong', () => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;
    
        cy.getByData('subject-name').contains('MEANer Stack Web Development')
            .parent().contains('Update Log').click();

        cy.url().should('include', '/log/fe30bb44-6a64-409e-9258-2d995e7b4783') ;
        cy.getByData('subject-input').clear();
        cy.getByData('subject-input').type('An Almost Perfect Subject Title "malice": "injectionAttack"');
        cy.getByData('details-input').clear();
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the ANGULAR portion\'s unit tests!');
        cy.getByData('rated-understanding-input').clear();
        cy.getByData('rated-understanding-input').type('5');
        cy.contains('Update Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('shows a validation error message when the details format is wrong', () => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;
    
        cy.getByData('subject-name').contains('MEANer Stack Web Development')
            .parent().contains('Update Log').click();

        cy.url().should('include', '/log/fe30bb44-6a64-409e-9258-2d995e7b4783') ;
        cy.getByData('subject-input').clear();
        cy.getByData('subject-input').type('MEANer Stack Web Development');
        cy.getByData('details-input').clear();
        cy.getByData('details-input').type('An almost perfect set of details `malice`:"injectionAttack"');
        cy.getByData('rated-understanding-input').clear();
        cy.getByData('rated-understanding-input').type('5');
        cy.contains('Update Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('shows a validation error message when the rated understanding format is wrong', () => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;
    
        cy.getByData('subject-name').contains('MEANer Stack Web Development')
            .parent().contains('Update Log').click();

        cy.url().should('include', '/log/fe30bb44-6a64-409e-9258-2d995e7b4783') ;
        cy.getByData('subject-input').clear();
        cy.getByData('subject-input').type('MEANer Stack Web Development');
        cy.getByData('details-input').clear();
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the ANGULAR portion\'s unit tests!');
        cy.getByData('rated-understanding-input').clear();
        cy.getByData('rated-understanding-input').type('Z');
        cy.contains('Update Log').click();
        cy.getByData('message').should('exist').contains('That format seems off. Try again.');
    });

    it('reset the log to what it was before this test suite ran', () => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;
    
        cy.getByData('subject-name')
            .contains('MEANer Stack Web Development')
            .parent().contains('Update Log').click();

        cy.url().should('include', '/log/fe30bb44-6a64-409e-9258-2d995e7b4783') ;
        cy.getByData('subject-input').clear();
        cy.getByData('subject-input').type('MEAN Stack Web Development');
        cy.getByData('details-input').clear();
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the Angular.js portion\'s unit tests!');
        cy.getByData('rated-understanding-input').clear();
        cy.getByData('rated-understanding-input').type('8');
        cy.contains('Update Log').click();
        cy.getByData('message').should('exist').contains('That log has been carried up(-to-date)!');

        cy.url().should('include', '/logs');
        cy.getByData('subject-name').contains('MEAN Stack Web Development');
    });
});
