const URL = 'https://the-internet.herokuapp.com/javascript_alerts';

describe('Alerts Demo', () => {
  it('Basic Authorization', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    });

    cy.get('.example>p').contains('Congratulations');
  });
  
  it('Basic Authorization with approach 2', () => {
    // Pass username and password in URL parameters itself
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    cy.get('.example>p').contains('Congratulations');
  });
});
