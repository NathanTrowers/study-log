describe('Study Session and New Log Pages', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.getByData('email-input').type('s.addict2@test.com');
        cy.getByData('password-input').type('bookworm');
        cy.contains('Login').click();
        cy.wait(4500);
        cy.url().should('include', '/home');
    });

    it('clicks the "delete" button then waits for the click confirmation request to timeout',() => {
        cy.contains('Logs').click();
        cy.url().should('include', '/logs')  ;

        cy.getByData('subject-name').contains('MEAN Stack Web Development')
            .parent().contains('Delete Log').click();

        cy.getByData('subject-name').contains('MEAN Stack Web Development')
            .parent().contains('Click to Confirm Delete');

        cy.wait(6000);

        cy.getByData('subject-name').contains('MEAN Stack Web Development')
        .parent().contains('Delete Log');
    });

    it('deletes a log then confirms it cannot be found', () => { 
        cy.contains('Start Studying').click();
        
        cy.wait(5000);
        cy.contains('Stop Studying').click();

        cy.getByData('subject-input').type('MEVN Stack Web Development');
        cy.getByData('details-input').type('Project scaffolding complete. Also did setup for the Vue.js portion\'s unit tests!');
        cy.getByData('rated-understanding-input').type('7');
        cy.contains('Create New Log').click();

        cy.contains('Logs').click();

        cy.getByData('subject-name').contains('MEVN Stack Web Development')
            .parent().contains('Delete Log').click();
        cy.getByData('subject-name').contains('MEVN Stack Web Development')
        .parent().contains('Click to Confirm Delete').click();
        
        cy.wait(5000);
        cy.getByData('logs-section').then(($logsSection) =>{
            if ($logsSection.text().includes('MEVN Stack Web Development')) {
                cy.getByData('this-test-failed');
            }
        });

    });
});
