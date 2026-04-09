describe('404 E2E Test', () => {
  const CHAR_LENGTH = 10;

  it('should have the correct page title', () => {
    // Visit the page you want to test
    cy.visit(`/${cy.generateRandomString(CHAR_LENGTH)}`);

    // Get the page title and assert its content
    cy.title().should('eq', 'Error 404 - Page Not Found');
  });

  it('should display the correct content', () => {
    // Visit the page containing the component
    cy.visit(`/${cy.generateRandomString(CHAR_LENGTH)}`);

    // Check for the logo
    cy.get('.logo img')
      .should('be.visible')
      .and('have.attr', 'src', 'shared/images/logo.png');

    // Check the 404 page structure (candle and numbers)
    cy.get('.title').should('have.length', 2);
    cy.get('.title').first().should('contain', '4');
    cy.get('.title-0').should('contain', '0');

    // Verify the "Oops" message is present
    cy.get('.description .subtitle').should(
      'contain.text',
      'Oops the page you are looking for does not exist.'
    );

    // Verify the "Go Home" button exists
    cy.get('.home-btn').should('be.visible').and('contain.text', 'Go Home');

    // Test the redirection when the "Go Home" button is clicked
    cy.get('.home-btn').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
