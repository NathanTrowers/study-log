describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('checks that the h1 contains the right text', () => {
    cy.getByData('welcome-heading').contains('Welcome to the Study Web App!');
  })

  it('clicks on "Login" button to visit Login page', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login')  ;
  });
});
