describe('MyTestSuite', () => {
  //   Direct access
  it('Fixtures Approach-1', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    // Taking data from fixture file
    cy.fixture('orangeHrm.json').then((data) => {
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();
      cy.xpath(
        "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"
      ).should('contain', data.expected);
    });
  });

  /*
  Second approach is by using 'BEFORE' hook--
  Access through hooks- for multiple it blocks
  */
  let data;
  before(() => {
    // quickCheck-this json file has multiple array of json objects
    cy.fixture('orangeHrm2.json').then((jsonData) => {
      data = jsonData;
    });
  });

  it('Fixtures Approach-2 with proper credentials', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    cy.get("input[placeholder='Username']").type(data[0].username);
    cy.get("input[placeholder='Password']").type(data[0].password);
    cy.get("button[type='submit']").click();
    cy.xpath(
      "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"
    ).should('contain', data[0].expected);
  });

  it('Fixtures Approach-2 with improper credentials', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    cy.get("input[placeholder='Username']").type(data[1].username);
    cy.get("input[placeholder='Password']").type(data[1].password);
    cy.get("button[type='submit']").click();
    cy.get("div[role='alert']").should('contain', data[1].expected);
  });
});
