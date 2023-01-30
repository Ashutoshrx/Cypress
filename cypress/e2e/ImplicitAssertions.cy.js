const URL =
  'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

describe('Implicit Assertion Demo ', () => {
  it('Implicit Assertions For URL', () => {
    cy.visit(URL);
    // Adding assertions to URL
    // 1.Using Should keyword
    cy.url()
      .should('include', 'orangehrmlive.com')
      .should('contain', 'orangehrmlive.com')
      .should(
        'eq',
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );

    // 2.Using And keyword
    cy.url()
      .should('include', 'orangehrmlive.com')
      .and('contain', 'orangehrmlive.com')
      .and(
        'eq',
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );
  });

  it('Implicit Assertions For Title', () => {
    cy.visit(URL);
    cy.title()
      .should('eq', 'OrangeHRM')
      .and('contain', 'Orange')
      .and('include', 'HRM');
  });

  it('Check Logo exists', () => {
    cy.visit(URL);
    cy.get('.orangehrm-login-logo > img')
      .should('exist') //Logo exists or not
      .and('be.visible'); //Logo visible or not
  });

  it('Capture Links', () => {
    cy.visit(URL);
    cy.xpath('//a').should('have.length', 5); //find all links in the page
  });

  it('Check User input', () => {
    cy.visit(URL);
    cy.xpath('//input[@placeholder="Username"]')
      .type('Admin')
      .should('have.value', 'Admin');
  });

  it('Check User and password and login', () => {
    cy.visit(URL);
    cy.xpath('//input[@placeholder="Username"]').type('Admin');
    cy.xpath('//input[@placeholder="Password"]').type('admin123');
    cy.xpath('//button[@type="submit"]').should('not.be.disabled');
  });
  
});
