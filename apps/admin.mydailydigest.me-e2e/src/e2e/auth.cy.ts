describe('Auth Page', () => {
  beforeEach(() => {
    cy.visit('/'); // Update this if the auth route is different
  });

  it('should display the auth page with correct elements', () => {
    // Verify the authentication container exists
    cy.get('.auth').should('be.visible');

    // Check for the logo
    cy.get('.logo img')
      .should('be.visible')
      .and('have.attr', 'src', '/images/global/logo.png');

    // Check the translated login message
    cy.get('.title').should('not.be.empty');

    // Verify the email input field exists
    cy.get('input[formcontrolname="email"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'name@example.com')
      .and('have.attr', 'matinput');
  });
});
