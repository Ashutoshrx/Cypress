const URL = 'https://the-internet.herokuapp.com/windows';

describe('Handle Multiple Tabs', () => {
  it.skip('First approach', () => {
    cy.visit(URL);

    // To open the target tab in the same tab
    cy.get('.example>a').invoke('removeAttr', 'target').click();
    cy.get('.example>h3').should('contain', 'New Window');

    // To go back to the parent tab
    cy.go('back');
  });

  it('Second approach', () => {
    cy.visit(URL);
    // Jquery function
    cy.get('.example>a').then((e) => {
      // Capture the value of href
      let redirectUrl = e.prop('href');
      // cy.log(e.prop('target'));   Used for logging 

      // visit the target page by capturing from href
      cy.visit(redirectUrl);
      cy.get('.example>h3').should('contain', 'New Window');
    });
  });
});
