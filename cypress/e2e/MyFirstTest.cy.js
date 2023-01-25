describe('My First Test', () => {
  it('Test-1 verifyTitle', () => {
    cy.visit('http://localhost:3000/');
    // Assert
    cy.title().should('eq','Github Finder');
  });
  it('test-2', () => {
    cy.visit('http://localhost:3000/');
    cy.title().should('eq','Github Finder R2');
  });
});
