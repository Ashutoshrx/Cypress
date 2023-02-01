const URL =
  'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

describe('Explicit Assertions Demo', () => {
  it('Check User and password and login', () => {
    cy.visit(URL);
    cy.xpath('//input[@placeholder="Username"]').type('Admin');
    cy.xpath('//input[@placeholder="Password"]').type('admin123');
    cy.xpath('//button[@type="submit"]').click();
    // cy.get()

    let expectedName = 'Vignesh Collings';
    let expectedName2 = 'xyz';
    cy.get("p.oxd-userdropdown-name").then((result) => {
      let actualName = result.text();
      // BDD Style
      expect(actualName).to.equal(expectedName);
      expect(actualName).to.not.equal(expectedName2);
      // TDD Style
      assert.equal(actualName, expectedName);
      assert.notEqual(actualName, expectedName2);
    });
  });
});
