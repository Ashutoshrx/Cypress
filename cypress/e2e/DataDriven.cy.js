describe('DataDriven Demo', () => {
  //   Best approach using loops
  it.only('DataDriven Approach with Best approach', () => {
    cy.fixture('orangeHrm2.json').then((data) => {
      cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );
      data.forEach((userData) => {
        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();

        if (userData.password === 'admin123' && userData.username === 'Admin') {
          cy.xpath(
            "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"
          ).should('contain', userData.expected);
          cy.wait(5000);
          cy.log('Use has been logged in successfully');
          cy.get('.oxd-userdropdown-name').click();
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
          // cy.xpath("//a[normalize-space()='Logout']").click();
        } else {
          cy.get("div[role='alert']").should('contain', userData.expected);
        }
      });
    });
  });
});
