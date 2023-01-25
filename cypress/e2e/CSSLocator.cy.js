const URL = 'http://localhost:3000/';

describe('CssLocators', () => {
  it('cssLocators-1', () => {
    cy.visit(URL);
    // passing tagname is optional
    // below I have used css locators using tag class
    cy.get('input.w-full').type('ashutoshrx');
    cy.get('button.absolute').click();

    // Assertion
    cy.get('h2.card-title').contains('ashutoshrx', { matchCase: false });
  });

  it('cssLocators-2', () => {
    cy.visit(URL);
    cy.get('input.w-full').type('ashutoshrx');
    // Searching using by tag attribute, this can also be rewritten as follows
    // Search by tag class attribute
    cy.get('button.absolute[type="Submit"]').click();
    // Search by tag attribute
    // cy.get('button[type="Submit"]').click();
    cy.get('h2.card-title').contains('ashutoshrx', { matchCase: false });   
  });
});
