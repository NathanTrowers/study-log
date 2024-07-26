describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checks that the h1 contains the right text', () => {
    cy.getByData('welcome-heading').contains('Welcome to the Study Log!');
  })

  it('clicks on "Login" button to visit Login page', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login')  ;
  });

  it('clicks on "Sign-up" button to visit Sign-up page', () => {
    cy.contains('Sign-up').click();
    cy.url().should('include', '/sign-up')  ;
  });
});
